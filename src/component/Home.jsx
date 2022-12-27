import React from 'react'
import { useState } from 'react'
import Axios  from 'axios'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {


  const navigate=useNavigate()
    const [name, setname]=useState("")
    const [age, setage]=useState("")
    const [gender, setgender]=useState("")
    const [mail, setmail]=useState("")


  const  handlesubmit=(e)=>{
     e.preventDefault()
     const ans={name,age,gender,mail}
     console.log(ans)
     Axios.post("https://6258573d0c918296a495a609.mockapi.io/datas",ans)
     .then((Response)=>{
        console.log(Response)
    })
    .catch((error)=>{
        console.log(error)
    })
navigate('/')

  }
  return (
    <div className="container">
      <Link to="/"><button>view</button></Link>
     <div className="wrapper">


     <form onSubmit={handlesubmit}>
                  <i>name</i>
                 <input placeholder='name' type='name' value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
                 <i>age</i>
                 <input placeholder='age' type='age' value={age} onChange={(e)=>{setage(e.target.value)}}/><br/>
                 <i>gender</i>
                 <input placeholder='gender' type='gender' value={gender} onChange={(e)=>{setgender(e.target.value)}}/><br/>
                 <i>mail</i>
                 <input placeholder='mail'type='email' value={mail} onChange={(e)=>{setmail(e.target.value)}}/><br/>
                 <button type='onsubmit'>submit</button>
      </form>



     </div>
     
    </div>
  )
}

export default Home
