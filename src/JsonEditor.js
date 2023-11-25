import React, { useState } from 'react';
import './JsonEditor.css';

function JsonEditor({ onUpdateSchema }) {
  const [jsonSchema, setJsonSchema] = useState('');

  const handleJsonChange = (e) => {
    const value = e.target.value;
    setJsonSchema(value);
    try {
      const parsedSchema = JSON.parse(value);
      onUpdateSchema(parsedSchema); // Pass the parsed schema to the parent component
    } catch (error) {
      // Handle JSON parsing errors
      console.error('Invalid JSON Schema', error);
    }
  };

  return (
    <div className="json-editor">
      <textarea
        value={jsonSchema}
        onChange={handleJsonChange}
        placeholder="Paste UI Schema here"
       
      />
    </div>
  );
}

export default JsonEditor;
