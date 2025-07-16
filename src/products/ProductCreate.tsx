// src/products/ProductCreate.tsx
import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Box } from '@mui/material';
import { VideoUploadInput } from '../components/VideoUploadInput';

export const ProductCreate: React.FC = props => (
  <Create {...props} title="Add New Dish">
    <SimpleForm
      sx={{ '& .MuiFormControl-root': { mb: 2 } }}
    >
      <TextInput
        source="name"
        label="Dish Name"
        fullWidth
        validate={required()}
        id="product-name"
        name="name"
        autoComplete="name"
      />
      <TextInput source="description" multiline fullWidth label="Description" />
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
  </Create>
);
