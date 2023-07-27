import React,{useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Axios from 'axios'

function Update() {
    const {id}=useParams()

    const [empList,setEmplist]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:8080/read/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })

    const updateList=(e)=>{
        e.preventDefault()
        Axios.put("http://localhost:8080/update/"+id,newList)
        .then((res)=>{
            alert("Updated Successfully")
        })
    }
    const [newList,setNewlist]=useState({
        nname:'',
        nemail:'',
        npwd:'',
        ngender:'',
        nage:''
    })
  return (
    <div>
        <h1>Employee Update Form</h1>
        {
            empList.map((val,key)=>{
                return(
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
                            onChange={(e)=>{setNewlist({...newList,nname:e.target.value})}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            defaultValue={val.email}
                            onChange={(e)=>{setNewlist({...newList,nemail:e.target.value})}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input 
                            type="password" 
                            class="form-control"  
                            defaultValue={val.pwd}
                            onChange={(e)=>{setNewlist({...newList,npwd:e.target.value})}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                       <select className="form-control" defaultValue={val.gender} onChange={(e)=>{setNewlist({...newList,ngender:e.target.value})}}>
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
                            onChange={(e)=>{setNewlist({...newList,nage:e.target.value})}}
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
                )

            })

        }


        
    </div>
  )
}

export default Update