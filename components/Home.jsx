import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function Home(){
    
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pwd,setPwd]=useState("")
    const[gender,setGender]=useState("")
    const[age,setAge]=useState(0)
    const addEmp=()=>{
        Axios.post("http://localhost:8080/saveemp",{
            name:name,
            email:email,
            pwd:pwd,
            gender:gender,
            age:age
        }).then(()=>{
            console.log("ins success")
        })
        }

       
    return(
        <body>
           <h1 class="my-5">add employee</h1>
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <form onSubmit={addEmp}>
                            <div class="form-group" >
                                <label for="name">Name</label>
                                <input type="text" class="form-control" placeholder="enter name"  onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="email">email</label>
                                <input type="email" class="form-control" placeholder="enter email"  onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div class="form-group" >
                                <label for="pwd">pwd</label>
                                <input type="password" class="form-control" placeholder="enter email password"onChange={(e)=>{setPwd(e.target.value)}}/>
                            </div>
                            <div class="form-group-check" onChange={(e)=>{setGender(e.target.value)}}>
                                <label for="gender">gender</label>
                                <input type="radio" class="form-control-check" value="male" name="gen"/>male
                                <input type="radio" class="form-control-check" value="female" name="gen"/>female

                            </div>
                            <div class="form-group">
                                <label for="age">age</label>
                                <input type="text" class="form-control" placeholder="enter age"onChange={(e)=>{setAge(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-success" name="submit"/>
                            </div><br></br>
                         <div>
                            <Link to="/view" class="btn btn-info">View Table</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        </body>
      
    )
}
export default Home