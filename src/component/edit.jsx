import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
   
 const navigate=useNavigate()
  const params=useParams()

    // const [alldata,setalldata]=useState([])
    const [name, setname]=useState("")
    const [age, setage]=useState("")
    const [gender, setgender]=useState("")
    const [mail, setmail]=useState("")
    const datas=()=>{
      axios.get("https://6258573d0c918296a495a609.mockapi.io/datas"+ "/"+params.id)
    .then((res)=>{
      console.log(res.data)
      
      // setalldata(res?.data)


      setname(res.data.name)
      setage(res.data.age)
      setgender(res.data.gender)
      setmail(res.data.mail)
      
    })
    .catch((err)=>{
      console.log(err)
    })
    }
   
  useEffect(()=>{
    datas()
  },[])



  const handlesubmitted=async(e)=>{
        e.preventDefault()
        const ans={name,age,gender,mail}
        console.log(ans)
       await axios.put("https://6258573d0c918296a495a609.mockapi.io/datas"+ "/"+params.id, ans)
        .then((response)=>{
           console.log(response.data)
       })
       .catch((error)=>{
           console.log(error)
       })
    navigate('/')

  }

  return (
    <div className="container">
    {/* <Link to="/"><button>view</button></Link> */}
   <div className="wrapper">


   <form onSubmit={handlesubmitted} >
                <i>name</i>
               <input placeholder='name' type='name' value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
               <i>age</i>
               <input placeholder='age' type='age' value={age} onChange={(e)=>{setage(e.target.value)}}/><br/>
               <i>gender</i>
               <input placeholder='gender' type='gender' value={gender} onChange={(e)=>{setgender(e.target.value)}}/><br/>
               <i>mail</i>
               <input placeholder='mail'type='mail' value={mail} onChange={(e)=>{setmail(e.target.value)}}/><br/>
               <button type='onsubmit'>update</button>
    </form>



   </div>
   
  </div>
  )
}

export default Edit
