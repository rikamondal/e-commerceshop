
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = () => {

const storedUser = JSON.parse(localStorage.getItem("user"))

if(!storedUser){
alert("No user found. Please register first.")
navigate("/register")
return
}

if(storedUser.email === email && storedUser.password === password){

localStorage.setItem("isLogin", "true")

alert("Login Successful")

navigate("/")   // go to home page

}else{

alert("Invalid email or password")

}

}

return(

<div>

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login