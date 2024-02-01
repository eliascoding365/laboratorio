import React, { useState } from 'react';
import styles from './date.module.css';

const DateDropDown = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    dia: '',
    mes: '',
    ano: '',
  });

  const handleInputChangeSelect = (e, fieldName) => {
    e.preventDefault();
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const DiaDropdown = () => {
    const dias = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
      <>
        <select
          className={styles.selectBox}
          onChange={(e) => handleInputChangeSelect(e, 'dia')}
        >
          <option value="">Dia</option>
          {dias.map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>
      </>
    );
  };

  const MesDropdown = () => {
    const meses = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
      <>
        <select
          className={styles.selectBox}
          onChange={(e) => handleInputChangeSelect(e, 'mes')}
        >
          <option value="">Mês</option>
          {meses.map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
        </select>
      </>
    );
  };

  const AnoDropdown = () => {
    const anoAtual = new Date().getFullYear();
    const anos = Array.from({ length: anoAtual - 1900 }, (_, index) => anoAtual - index);

    return (
      <>
        <select
          className={styles.selectBox}
          onChange={(e) => handleInputChangeSelect(e, 'ano')}
        >
          <option value="">Ano</option>
          {anos.map((ano) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      </>
    );
  };

  return (
    <div className='w-52'>
      <DiaDropdown />
      <MesDropdown />
      <AnoDropdown />
      <button
        onClick={() => {
          const response = {
            day: formData.dia,
            month: formData.mes,
            year: formData.ano,
            date: formData.dia + formData.mes + formData.ano,
          };
          console.log(response);

          // Chame a função onSubmit e passe os valores da data
          onSubmit(response);
        }}
      >
        Mostrar Valores
      </button>
    </div>
  );
};

export default DateDropDown;
