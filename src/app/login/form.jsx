'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';


export default function Form() {
    const router = useRouter();

    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = await signIn('credentials', {
          name: formData.get('name'),
          password: formData.get('password'),
          redirect: false
      });

      console.log(response)
  
    

    
      //api validation
      
    const name = formData.get('name');
    const password = formData.get('password');
    try {
      const responseApi = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
    
      if (responseApi.ok) {
        console.log('Login Efetivado');
        router.push('/');
        router.refresh();
      } else {
        const errorData = await responseApi.json();
        throw new Error(errorData.message || 'Acesso negado');
      }
    } catch (error) {
      console.log(error)
      setError(error.message);
    }}
    
  
  return (
    <div className='bg-slate-300'>
      <div className="">
        <Link className='bg-slate-200 hover:bg-white p-2 rounded-full' href='/'>Voltar</Link>
      </div>

      <label>Login</label>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      >
        <input
          name='name'
          type="text"
          className="border border-black"
          placeholder="Nome de usuário"
        />
        <input
          name='password'
          type="password"
          className="border border-black"
          placeholder="Senha"
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
