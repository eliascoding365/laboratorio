// Formulario.js
import React, { useState } from 'react';
import DateDropDown from './components/date/dateCo';

const Formulario = () => {
  const [formData, setFormData] = useState({
    dia: '',
    mes: '',
    ano: ''
  });

  const handleDateChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here you can do whatever you want with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <DateDropDown onChange={handleDateChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Formulario;
