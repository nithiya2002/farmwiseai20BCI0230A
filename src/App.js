import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { addField, removeField } from './actions'; // Assuming you have defined these actions

import Field from './Field'; // Assuming you have defined this component

const App = () => {
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('');
  const [fieldValue, setFieldValue] = useState('');
 
 
 
  const [fieldData, setFieldData] = useState('');
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const renderdropdowm=()=>{
    if(showSecondDropdown){
      return(
        <>
        

   
        <div style={{ marginLeft:'100px', fontSize: 'small' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Dynamic data collection</label>
        <select
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
          style={{
            width: '150px',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: '5px',
            paddingBottom: '5px',
            backgroundColor: '#172554',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          <option value="" style={{ backgroundImage: 'user.png', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Select</option>
          <option value="text" style={{ backgroundImage: 'url(C:/Users/Admin/farmwiseai/public/ser.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Text Box</option>
          <option value="dropdown" style={{ backgroundImage: 'url(user.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Drop Down</option>
          <option value="date" style={{ backgroundImage: 'url(user.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Date Picker</option>
        </select>
      </div>
</>

      );
    }
  }

  const renderDynamicFields = () => {
    if (fieldType === 'text' && showSecondDropdown) {
      return (
        <>
          <input type="text" placeholder="Field Display Name" />
          <select>
            <option value="number">Number</option>
            <option value="string">String</option>
            <option value="boolean">Boolean</option>
          </select>
          <input type="text" placeholder="Field Max Length" />
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input type="text" placeholder="Field Data" />
          <button>Confirm</button>
        </>
      );
    } else if (fieldType === 'date' && showSecondDropdown) {
      return (
        <>
          <input type="text" placeholder="Field Display Name" />
          <select>
            <option value="Date">Date</option>
          </select>
          <div>
            <label>From:</label>
            <input type="date" />
            <label>To:</label>
            <input type="date" />
          </div>
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input type="text" placeholder="Field Data" />
          <button>Confirm</button>
        </>
      );
    } else if (fieldType === 'dropdown' && showSecondDropdown) {
      // Add logic for dropdown fields
    }

    return null;
  };

  const handleAddField = () => {
    setShowSecondDropdown(true);
    // Add logic for adding fields
  };



  return (
    <div style={{ border:'2px solid', margin:'100px',bottom:0,borderRadius:'20px', fontSize: 'small', padding:'80px',paddingTop:'50px' }}>
      <h1>Add Fields</h1>

      <div style={{ textAlign: 'center', fontSize: 'small' }}>
  <label style={{ display: 'block', marginBottom: '5px' }}>Dynamic data collection</label>
  <select
    value={fieldType}
    onChange={(e) => setFieldType(e.target.value)}
    style={{
      width: '150px',
      textAlign: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
      backgroundColor: '#172554',
      color: 'white',
      borderRadius: '5px',
    }}
  >
    <option style={{ backgroundImage: 'user.png', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Select</option>
    <option  style={{ backgroundImage: 'url(C:/Users/Admin/farmwiseai/public/ser.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Student</option>
    <option style={{ backgroundImage: 'url(user.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Salaried</option>
    <option  style={{ backgroundImage: 'url(user.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '5px 50%' }}>Business</option>
  </select>
</div>
<div style={{ marginLeft: '50px', fontSize: 'small' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Onclick this Button</label>
        <button onClick={handleAddField}>Add Field</button>
      </div>
{renderdropdowm()}

      <div style={{ marginLeft: '50px', fontSize: 'small' }}>
        {renderDynamicFields()}
      </div>


      


          </div>
  );
};

export default App;

