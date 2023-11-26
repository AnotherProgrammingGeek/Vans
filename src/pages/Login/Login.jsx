import React, { useState } from "react"
export default function Login(props){
  let [loginFormDAta,setLoginFormDanta] = useState({email: "", password: ""})
  function handelSubmit(e){
    e.preventDefault()
    console.log(loginFormDAta);
  }
  function handlechange(e){
    let {name, value} = e.target
    setLoginFormDanta(prev =>({
      ...prev, [name] : value
    }))
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form className="login-form" onSubmit={handelSubmit}>
        <input name="email" onChange={handlechange} type="email" placeholder="Your Email" value={loginFormDAta.email} />
        <input name="password" onChange={handlechange} type="password" placeholder="Your password" value={loginFormDAta.password} />
        <button>Login</button>

      </form>
    </div>
  )
};
