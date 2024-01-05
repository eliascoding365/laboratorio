'use client'
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  (e) => {
    e.preventDefault();
    try {
      const  res =  axios.post('http://127.0.0.1:8000/login', {
        name: name,
        password: password
      });

      if (res.status === 200) {
        // Redirecionar após o login bem-sucedido
      } else {
        // Lidar com erros de login, exibir mensagem de erro, etc.
        console.error('Falha no login');
      }
    } catch (error) {
      console.error('Erro:', error);
      console.log('CU');
    }
  };

  return (
    <div className='bg-slate-300'>
      <div className="">
        <Link className='bg-slate-200 hover:bg-white p-2 rounded-full' href='/'>Voltar</Link>
      </div>

      <label>Login</label>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-black"
          placeholder="Nome de usuário"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black"
          placeholder="Senha"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
