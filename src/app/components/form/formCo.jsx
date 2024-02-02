import DateDropDown from '../date/dateCo';
import React, { useState } from 'react';
import BtnEnviaForm from '../btnEnvia/button';

const Forme = () => {
  const [formData, setFormData] = useState({
    nomeIdoso: '',
    dataNascIdoso: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui você pode enviar os dados do formulário, incluindo a dataNascIdoso, para o servidor
      const response = /* await api.post('/cartao-idoso', formData) */ {
        dataNasc: formData.dataNascIdoso,
        nome: formData.nomeIdoso,
      };
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com a submissão da data
  const handleDateSubmit = (dateValues) => {
    // Atualize o estado com o valor da data
    setFormData((prevData) => ({
      ...prevData,
      dataNascIdoso: dateValues.date, // Assumindo que 'date' contém a data no formato desejado
    }));
    console.log('Valores da data recebidos:', dateValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Passe a função handleDateSubmit como prop para DateDropDown */}
        <DateDropDown onSubmit={handleDateSubmit} value={formData.dataNascIdoso} />

        <input
          type="text"
          name="nomeIdoso"
          onChange={handleInputChange}
          value={formData.nomeIdoso}
          placeholder="Nome do Idoso"
        />

        {/* Passe a função handleSubmit como prop para BtnEnviaForm */}
        <BtnEnviaForm onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Forme;
