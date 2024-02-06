import React, { useState } from 'react';
import DateDropDown from './components/date/dateCo'; // Supondo que o arquivo esteja no mesmo diretório

const Formulario = () => {
  const [formData, setFormData] = useState({
    dataNasc: {
      dia: '',
      mes: '',
      ano: ''
    }
  });

  const handleDateSubmit = ({ dia, mes, ano }) => {
    setFormData(prevData => ({
      ...prevData,
      dataNasc: {
        ...prevData.dataNasc,
        dia,
        mes,
        ano
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DateDropDown onSubmit={handleDateSubmit} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;