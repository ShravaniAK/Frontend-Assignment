import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import FormPreview from './FormPreview';
import './App.css';

function App() {
  const [schema, setSchema] = useState(null);

  const handleSchemaUpdate = (newSchema) => {
    setSchema(newSchema);
  };

  return (
    <div className="App">
      <JsonEditor onUpdateSchema={handleSchemaUpdate} />
      <FormPreview schema={schema} />
     
    </div>
  );
}

export default App;
