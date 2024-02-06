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
    const dias = Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'));

    return (
      <>
        <select
          className={styles.selectBox}
          value={formData.dia}
          onChange={(e) => {
            handleInputChangeSelect(e, 'dia');
            const response = {
              dia: e.target.value
            };
            onSubmit(response);
          }}
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
    const meses = Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, '0'));

    return (
      <>
        <select
          className={styles.selectBox}
          value={formData.mes}
          onChange={(e) => {
            handleInputChangeSelect(e, 'mes');
            const response = {
              mes: e.target.value
            };
            onSubmit(response);
          }}
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
          value={formData.ano}
          onChange={(e) => {
            handleInputChangeSelect(e, 'ano');
            const response = {
              ano: e.target.value
            };
            onSubmit(response);
          }}
        >
          <option>Ano</option>
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
    </div>
  );
};

export default DateDropDown;
