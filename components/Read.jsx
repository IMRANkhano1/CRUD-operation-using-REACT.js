import React,{useEffect,useState} from 'react';
// useParam altrnative to body parser
import {useParams} from 'react-router-dom' 
import Axios from 'axios';

function Read(){
    const {id}=useParams()
    const[empList,setEmplist]=useState([])
//useEffect atomatic value genrate
    useEffect(()=>{
        Axios.get("http://localhost:8080/read/"+id).then((response)=>{
            setEmplist(response.data)
        })
    })
    return(
        <div>
            <h1>Employee Details</h1>
            {
                empList.map((val,key)=>{
                    return(
                        <div>
                               <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>pwd</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                             
                            <td>{val.id}</td>

                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.pwd}</td>
                            <td>{val.gender}</td>
                            <td>{val.age}</td>
                            </tr>
                            </tbody>
 
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Read