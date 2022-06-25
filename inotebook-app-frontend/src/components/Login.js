import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './../Api'


export default function Login() {
    const [creds, setCreds] = useState({username:"",password:""});
    let navigate=useNavigate();
    const handleSubmit=async(e)=>{
       e.preventDefault();  
    
           const res = await Api.post('/api/v1/user/login',{username: creds.username,password:creds.password})
           if(res.data.status==="success"){
               localStorage.setItem("token",res.data.token)
               navigate('/')
           }else{
               alert("invalid")
           }
      

    }
    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }
  return (
      <>
      <div className="container w-25">
    <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" name='username' value={creds.username} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={creds.password} onChange={onChange}/>
  </div>
    <div className='text-center'>
  <button type="submit" className="btn btn-success">Login</button>
  </div>
</form>
</div>

      </>
  )
}
