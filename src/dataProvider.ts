// src/dataProvider.ts
import simpleRestProvider from 'ra-data-simple-rest'
import { uploadToS3 } from './utils/s3'
import { DataProvider, CreateParams, CreateResult, UpdateParams, UpdateResult } from 'ra-core'

const restProvider = simpleRestProvider(import.meta.env.VITE_API_URL!)

interface FileHolder { rawFile?: File; [k: string]: any }
interface RecordData { id: string|number; video_key?: string|FileHolder; [k: string]: any }

const dataProvider: DataProvider = {
  ...restProvider,

  create: async (resource, params: CreateParams<RecordData>): Promise<CreateResult> => {
    if (resource === 'product' && params.data.video_key && (params.data.video_key as FileHolder).rawFile instanceof File) {
      const key = await uploadToS3((params.data.video_key as FileHolder).rawFile!)
      params.data = { ...params.data, video_key: key }
    }
    return restProvider.create(resource, params)
  },

  update: async (resource, params: UpdateParams<RecordData>): Promise<UpdateResult> => {
    if (resource === 'product' && params.data.video_key && (params.data.video_key as FileHolder).rawFile instanceof File) {
      const key = await uploadToS3((params.data.video_key as FileHolder).rawFile!)
      params.data = { ...params.data, video_key: key }
    }
    return restProvider.update(resource, params)
  },
}

export default dataProvider
