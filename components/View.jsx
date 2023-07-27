import React, { useState } from'react'
import'bootstrap/dist/css/bootstrap.min.css'
import Axios from'axios'
import{Link}from 'react-router-dom'
function View(){
    const[empList,setEmplist]=useState([])

    const viewEmptable=()=>{
        Axios.get("http://localhost:8080/view").then((response)=>{
            setEmplist(response.data)

        })
    }
    const delEmp=(id)=>{
        Axios.delete("http://localhost:8080/deleteEmp/"+id).then
        (res=>{window.location.reload()}).catch(err=>console.log("error"))
    }

    return(

        <div><button class="btn btn-primary" onClick={viewEmptable}>view Data</button>
        <table class="table table-border">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
                </tr>
            </thead>
            {
                empList.map((val,key)=>{
                    return(
                        <tbody>
                            <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.pwd}</td>
                        <td>{val.gender}</td>
                        <td>{val.age}</td>
                        <td><button class="btn btn-danger" onClick={()=>delEmp(val.id)}>DELETE</button></td>
                        <td><Link to={`/update/${val.id}`} class="btn btn-info">UPDATE</Link></td>
                        <td><Link to={`/update2/${val.id}`} class="btn btn-info">UPDATE2</Link></td>
                        {/* use``tilied simbol for get value  */}
                        <td><Link to={`/read/${val.id}`} className="btn btn-dark">fetch</Link></td>
                        </tr>
            
                    </tbody>)
                })
            }
                    </table></div>
        
    )
        }
                    
               
export default View