import React, { useState } from "react";






export default function Register(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    async function register(ev){
        ev.preventDefault();
    
      const response= await fetch('https://bloggie-bkrf.onrender.com/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'}
        })
               
              if(response.status===200)
              alert('Registration successful');
              else{
                alert('registration failed');
              }
    }

    return (

        <form className="register" onSubmit={register}>
            <h1>Register</h1>
          <input type="text" autoComplete="off" placeholder="Username" value={username} onChange={ev =>setUsername(ev.target.value)}/>

<input type="password" autoComplete="off" placeholder="Password" value={password} onChange={ev =>setPassword(ev.target.value)}/>

<button type="submit">Register</button>
        </form>
    );
}
