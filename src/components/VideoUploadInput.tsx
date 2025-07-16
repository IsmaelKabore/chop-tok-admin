// src/components/VideoUploadInput.tsx
import * as React from 'react';
import { useInput, useNotify, FieldTitle } from 'react-admin';
import { 
  Box, 
  Typography, 
  LinearProgress, 
  IconButton, 
  Button 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props { 
  source: string; 
  label?: string;
}

export const VideoUploadInput: React.FC<Props> = ({ source, label }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useInput({ source });
  const notify = useNotify();
  const [uploading, setUploading] = React.useState(false);
  const [fileName, setFileName] = React.useState<string>('');

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      notify('Please select a video file', { type: 'error' });
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      notify('File size must be less than 50 MB', { type: 'error' });
      return;
    }
    setFileName(file.name);
    setUploading(true);
    try {
      onChange({ rawFile: file });
      notify(`"${file.name}" ready for upload`, { type: 'info' });
    } catch (err) {
      console.error(err);
      notify('Upload failed. Please try again.', { type: 'error' });
    } finally {
      setUploading(false);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const removeFile = () => {
    onChange(null);
    setFileName('');
  };

  return (
    <Box sx={{ my: 2 }}>
      <FieldTitle label={label} source={source} />

      {/* Hidden native input */}
      <input
        type="file"
        accept="video/*"
        id={`video-upload-${source}`}
        style={{ display: 'none' }}
        onChange={onInputChange}
        disabled={uploading}
      />

      {/* Dropzone & Button */}
      <Box
        onDragOver={e => e.preventDefault()}
        onDrop={onDrop}
        sx={{
          border: '2px dashed var(--ra-primary-color)',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          bgcolor: uploading ? 'var(--ra-vivid-light)' : 'transparent',
          cursor: uploading ? 'default' : 'pointer',
          position: 'relative',
        }}
        onClick={() => document.getElementById(`video-upload-${source}`)?.click()}
      >
        <UploadFileIcon sx={{ fontSize: 40, color: 'var(--ra-primary-color)' }} />
        <Typography variant="body1" sx={{ mt: 1 }}>
          {uploading
            ? 'Processing video...'
            : fileName
            ? 'Click to replace video'
            : 'Drag & drop a video here, or click to select'}
        </Typography>
      </Box>

      {/* Progress */}
      {uploading && (
        <Box sx={{ mt: 1 }}>
          <LinearProgress />
        </Box>
      )}

      {/* File name & Remove */}
      {fileName && !uploading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
            bgcolor: 'var(--ra-vivid-light)',
            p: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {fileName}
          </Typography>
          <IconButton size="small" onClick={removeFile}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      {/* Current video preview */}
      {typeof value === 'string' && value && (
        <Box sx={{ mt: 2 }}>
          <video
            src={value}
            controls
            style={{
              width: '100%',
              maxHeight: 240,
              borderRadius: 4,
              border: '1px solid #ddd',
            }}
          />
        </Box>
      )}

      {/* Validation error */}
      {error && (
        <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
          {error.message}
        </Typography>
      )}

      {/* Fallback button for small screens */}
      {!uploading && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<UploadFileIcon />}
            onClick={() => document.getElementById(`video-upload-${source}`)?.click()}
          >
            Choose Video
          </Button>
        </Box>
      )}
    </Box>
  );
};
