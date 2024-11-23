
import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({});

  const handleForm =(e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method:'POST',
      body:JSON.stringify(form), 
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }

  return (
    <div id='pass-manag'>
        <h1>Password-Manager</h1>
        <br />
      <form onSubmit={handleSubmit}>
        
        <label className='block' htmlFor="text">Username</label>
        <br />
        
        <input className='block text-sm font-medium text-slate-700' placeholder='Enter your username' name='username' type="text" onChange={handleForm} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />

        <input  placeholder='Enter your password' name='password' type="text" onChange={handleForm} />
        <br />
        <br />
        <button id='btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
