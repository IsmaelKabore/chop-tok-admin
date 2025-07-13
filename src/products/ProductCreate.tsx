import React from 'react';
import {
  Create, SimpleForm, TextInput, NumberInput, FileInput, FileField, required
} from 'react-admin';

export const ProductCreate: React.FC = props => (
  <Create {...props} title="Add New Dish">
    <SimpleForm>
      <TextInput source="name" fullWidth validate={required()} />
      <TextInput source="description" multiline fullWidth />
      <NumberInput source="price" validate={required()} />
      <TextInput source="ingredients_option" label="Ingredients (comma-sep)" />
      <FileInput source="video" label="Upload Video" accept={{ 'video/*': [] }}>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
