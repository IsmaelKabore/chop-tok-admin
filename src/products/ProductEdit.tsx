// src/products/ProductEdit.tsx
import { Edit, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { VideoUploadInput } from '../components/VideoUploadInput';
import { Box } from '@mui/material';

export const ProductEdit: React.FC = props => (
  <Edit {...props} title="Edit Dish">
    <SimpleForm
      sx={{ '& .MuiFormControl-root': { mb: 2 } }}
    >
      <TextInput source="name" label="Dish Name" fullWidth validate={required()} />
      <TextInput source="description" label="Description" multiline fullWidth />
      <NumberInput
        source="price"
        label="Price (USD)"
        fullWidth
        validate={required()}
      />
      <TextInput
        source="ingredients_option"
        label="Ingredients (comma-separated)"
        fullWidth
      />
      <Box mt={1}>
        <VideoUploadInput source="video" label="Upload Video" />
      </Box>
    </SimpleForm>
  </Edit>
);
