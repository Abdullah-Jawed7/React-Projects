import React,{useState ,useContext} from "react";
import Usercontext from "../Context/UserContext";
import '../App.css'
function Login() {
  const [password ,setPassword] = useState('')
  const [username ,setUserName] = useState('')
  const{setUser} =useContext(Usercontext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    setUser({username ,password})
    // style.color='blue'
  }



    return(
        <div className="Login">
       <h1>Login</h1>
       <input 
       className="input"
       type="text"
       placeholder="UserName"
       value={username}
       onChange={(e)=> setUserName(e.target.value)}
       />
       <br />
       <input 
       className="input"
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e)=> setPassword(e.target.value)}
       />
       <button
       className="btn"
        onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login