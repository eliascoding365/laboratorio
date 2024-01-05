  'use client'
  import React from 'react'
  import { useEffect, useState } from 'react'
  import axios from 'axios'
  import Link from 'next/link'

  const Component = () => {
    const [data, setData] = useState([]);
    const handleFetch = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/user')
        setData(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    };

    useEffect(() => {
      handleFetch();
    }, [] );
    return (
      <>
        <h1>Api:</h1>
        {data.map ((item)=> (
          <div key={item.id}>
            <div >
              <p>User:{item.name}</p>
            </div>
            <div >
              <p>password:{item.password}</p>
            </div>
            <div >
            </div>
            <br/>
          </div>
        ))}
      </>
    )
  }

  const Fetch = () => {
    const [isVisible , setIsVisible] = useState(false)

    return (
      <>
      <div>
        <button className='bg-slate-200 hover:bg-white py-2 px-4 rounded-full'><Link href='/'>Voltar</Link></button>

        <h2>GET</h2>
        <button
        onClick={() => setIsVisible(!isVisible)}
        >Ver
        
        </button>
        {isVisible && <Component /> }
        </div>
      </>
    )
  }

  export default Fetch