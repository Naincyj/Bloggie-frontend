import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
//import {UserContext} from "../UserContext";
import { UserContext} from "./UserContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  const navigate=useNavigate();
  
  async function login(ev) {
    

    ev.preventDefault();
    const response = await fetch('https://bloggie-bkrf.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        navigate('/');
      });
    } else {
      alert('wrong credentials');
    }
  }

  
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
    </form>
  );
}
