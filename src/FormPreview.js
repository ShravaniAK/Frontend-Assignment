import React from 'react';

function FormPreview({ schema }) {
  const renderField = (field) => {
    switch (field.uiType) {
      case 'Input':
        return (
          <div key={field.jsonKey}>
            <label>{field.label}</label>
            <input type="text" placeholder={field.placeholder} />
          </div>
        );
      case 'Select':
        return (
          <div key={field.jsonKey}>
            <label>{field.label}</label>
            <select defaultValue={field.validate.defaultValue}>
              {field.validate.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const renderGroup = (group) => {
    return (
      <div key={group.jsonKey}>
        <h2>{group.label}</h2>
        {group.subParameters.map((field) => renderField(field))}
      </div>
    );
  };

  const renderForm = () => {
    if (!schema || schema.length === 0) {
      return <div>No schema provided</div>;
    }

    return (
      <form>
        {schema.map((field) => {
          if (field.uiType === 'Group') {
            return renderGroup(field);
          }
          return renderField(field);
        })}
        <button type="submit">Submit</button>
      </form>
    );
  };

  return <div className="form-preview">{renderForm()}</div>;
}

export default FormPreview;
