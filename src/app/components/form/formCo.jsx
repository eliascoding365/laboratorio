// Formulario.js
import React, { useState } from 'react';
import DateDropDown from './components/date/dateCo';
import BtnEnviarForm from '../btnEnvia/button';

const Formulario = () => {
  const [formData, setFormData] = useState({
    dia: '',
    mes: '',
    ano: '',
  });
  
  const handleDateChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dia, mes, ano } = formData;
    const dataConcatenada = { data: `${dia}/${mes}/${ano}` };
    console.log('Data concatenada:', dataConcatenada);
  };

  return (
    <div className='flex flex-col items-center nowrap justify-between p-24 '>
      <form onSubmit={handleSubmit}>
        <DateDropDown onChange={handleDateChange} />
        <BtnEnviarForm/>
      </form>
    </div>
  );
};

export default Formulario;
