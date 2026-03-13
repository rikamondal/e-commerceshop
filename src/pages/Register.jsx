import React,{useState} from "react"

const Register = () => {

const[email,setEmail] = useState("")
const[password,setPassword] = useState("")

const handleRegister = () => {

const user = {email,password}

localStorage.setItem("user",JSON.stringify(user))

alert("Registration Successful")

}

return(

<div>

<h2>Register</h2>

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

<button onClick={handleRegister}>
Register
</button>

</div>

)

}

export default Register