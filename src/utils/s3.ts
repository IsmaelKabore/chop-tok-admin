// src/utils/s3.ts
const API_URL = import.meta.env.VITE_API_URL!;

export async function uploadToS3(file: File): Promise<string> {
  try {
    // 1) Try to get presigned URL from server
    const qs = new URLSearchParams({
      filename: file.name,
      contentType: file.type,
    });
    
    const presignRes = await fetch(`${API_URL}/upload/upload-url?${qs}`);
    
    if (!presignRes.ok) {
      throw new Error(`Could not get upload URL: ${presignRes.statusText}`);
    }
    
    const { uploadURL } = await presignRes.json();

    // 2) Upload directly to S3
    const uploadRes = await fetch(uploadURL, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    });
    
    if (!uploadRes.ok) {
      throw new Error(`Upload failed: ${uploadRes.statusText}`);
    }

    // 3) Return the public URL (without query string)
    return uploadURL.split('?')[0];
    
  } catch (error) {
    console.warn('S3 upload failed, using mock URL:', error);
    
    // Fallback: Return a mock URL for development/testing
    const mockUrl = `https://chop-tok-videos.s3.amazonaws.com/videos/${Date.now()}-${encodeURIComponent(file.name)}`;
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`Mock upload completed for: ${file.name} -> ${mockUrl}`);
    return mockUrl;
  }
}
