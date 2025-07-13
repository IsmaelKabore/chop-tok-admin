import React from 'react';
import {
  Edit, SimpleForm, TextInput, NumberInput, FileInput, FileField, required
} from 'react-admin';

export const ProductEdit: React.FC = props => (
  <Edit {...props} title="Edit Dish">
    <SimpleForm>
      <TextInput source="name" fullWidth validate={required()} />
      <TextInput source="description" multiline fullWidth />
      <NumberInput source="price" validate={required()} />
      <TextInput source="ingredients_option" label="Ingredients (comma-sep)" />
      <FileInput source="video" label="Change Video" accept={{ 'video/*': [] }}>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
