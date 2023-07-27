import React, {useEffect, useState, useRef} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

function Update2() {
    const {id}=useParams()

    const [empList,setEmplist]=useState([])

    const nname=useRef(null)
    const nemail=useRef(null)
    const npwd=useRef(null)
    const ngender=useRef(null)
    const nage=useRef(null)

    const nav=useNavigate()

    useEffect(()=>{
        Axios.get("http://localhost:8080/read/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })

    const updateList=(e)=>{
        e.preventDefault()
        Axios.put("http://localhost:8080/update2/"+id,{
            nname:nname.current.value,
            nemail:nemail.current.value,
            npwd:npwd.current.value,
            ngender:ngender.current.value,
            nage:nage.current.value
        })
        .then((res)=>{
          nav("/view")

        })

    }


  return (
    <div>
        <h1>Employee Details</h1>
    {
        empList.map((val,key)=>{
            return(
                <div>
                <div class="container">
                <div class="d-flex justify-content-center">
                <div class="row">
                <form action="" method="POST">
                <div class="form-group">
                        <label for="id">Employee ID</label>
                        <input type="text" class="form-control" 
                        defaultValue={val.id} readonly/>
                    </div>
                    <div class="form-group">
                        <label for="name">Employee Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={val.name}
                            ref={nname}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            defaultValue={val.email}
                            ref={nemail}
                        />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input 
                            type="password" 
                            class="form-control"  
                            defaultValue={val.pwd}
                            ref={npwd}
                        />
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                       <select className="form-control"  ref={ngender} defaultValue={val.gender} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       </select>
                    </div>  
                    <div class="form-group">
                        <label for="age">Enter Age</label>
                        <input 
                            type="text" 
                            class="form-control"  
                            defaultValue={val.age}
                            ref={nage}
                        />
                    </div>
                    <div class="form-group">
                         <button class="btn btn-success my-3" onClick={updateList}>Update Record</button>
                    </div>
                </form>
                <div>
                    <Link to="/view" class="btn btn-info">View Table</Link>
                </div>
                </div>
                </div>
    </div>
               </div>
            )
        })}
    </div>
  )
}
export default Update2
