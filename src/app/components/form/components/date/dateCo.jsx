import React, { useState } from 'react';
import styles from './date.module.css';
// DateDropDown.js

const DateDropDown = ({ onChange }) => {
  const [formData, setFormData] = useState({
    dia: '',
    mes: '',
    ano: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Send the updated formData back to the parent component
    onChange({ ...formData, [name]: value }); // Using the latest state
  };

  return (
    <div>
      <select name="dia" value={formData.dia} onChange={handleChange}>
        <option value="">Dia</option>
        {/* Options for days */}
        {Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
      </select>
      <select name="mes" value={formData.mes} onChange={handleChange}>
        <option value="">Mês</option>
        {/* Options for months */}
        {Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
      </select>
      <select name="ano" value={formData.ano} onChange={handleChange}>
        <option value="">Ano</option>
        {/* Options for years */}
        {Array.from({ length: new Date().getFullYear() - 1900 }, (_, index) => new Date().getFullYear() - index)
          .map((ano) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DateDropDown;
