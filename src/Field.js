import React from 'react';
import InputField from './InputField';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';

const Field = ({ fieldName, fieldType, fieldValue, fieldData, onChange }) => {
  return (
    <div>
      <label>{fieldName}</label>
      {fieldType === 'text' && (
        <InputField type="text" placeholder={fieldData} onChange={onChange} />
      )}
      {fieldType === 'dropdown' && (
        <Dropdown options={fieldData} onChange={onChange} />
      )}
      {fieldType === 'date' && <DatePicker onChange={onChange} />}
    </div>
  );
};

export default Field;
