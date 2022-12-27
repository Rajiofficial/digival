import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/signin.css'
import { Link, useNavigate } from 'react-router-dom'
const Signin = () => {
  
// let navigate=useNavigate()


// ..........navigation
const navigate=useNavigate()

// ..........api data get

  const [alldata,setalldata]=useState([])
  
  const datas=async()=>{
    await axios.get("https://6258573d0c918296a495a609.mockapi.io/datas")
  .then((res)=>{
    console.log(res.data)
    setalldata(res?.data)
    
  })
  .catch((err)=>{
    console.log(err)
  })
  }
 
useEffect(()=>{
  datas()
  console.log("inuse effect")
},[])


const handledelete= async(i)=>{
await axios.delete("https://6258573d0c918296a495a609.mockapi.io/datas" +"/" + i )
datas()
}





const handleedit=(id)=>{

navigate(`/edit/${id}`)
console.log(id)


}
  return (

    <>
{console.log("in return")}
<div className="container">
  <div className="navbar">
    <input placeholder='search'/>
  </div>   
 
</div>
<div className="bordertable">
<div className="link"> <Link to="/home"><button className='btnadd'>ADD</button></Link>  </div>
  <div className="box">
 
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">age</th>
      <th scope="col">gender</th>
      <th scope="col">mail</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
{
  alldata.map((s,i)=>{
    return(
      <tr key={i}>
         <td>{s.id}</td>
      <td>{s.name}</td>
      <td>{s.age}</td>
      <td>{s.gender}</td>
      <td>{s.mail}</td> 
      <td><button type="button" class="btn btn-primary" onClick={()=>{handleedit(s.id)}} >edit</button></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>{handledelete(s.id)}}>delete</button></td>
    </tr>
    )
  })
    

}
    
  </tbody>
</table>
</div>
</div>
    </>
  )
}

export default Signin
