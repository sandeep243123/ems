import React, { useState,useEffect } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router';

function EmployeeComponent() {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const navigator=useNavigate();
  const {id}=useParams();
  const [errors,setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  useEffect(()=>{
    if(id){
      getEmployee(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }).catch((e)=>console.error(e))
    }
  },[id])

  function saveEmployee(e){
    e.preventDefault();
    const emp={firstName,lastName,email}
    if(validateForm()){
      if(id){
        updateEmployee(id,emp).then((response)=>{
        console.log(response.data)
        navigator("/employees")
      }).catch((er)=>console.error(er))
    }else{
      createEmployee(emp).then(()=>{
        navigator("/employees")
      })
    }
    // navigator("/employees")
      
    }
  }

  function validateForm(){
    let valid=true;
    const errorCopy={...errors}
    if(firstName.trim()){
      errorCopy.firstName='';
    }else{
      errorCopy.firstName='First name is required';
      valid=false;
      
    }
    if(lastName.trim()){
      errorCopy.lastName='';
    }else{
      errorCopy.lastName='Last name is required';
      valid=false;
    }
    if(email.trim()){
      errorCopy.email='';
    }else{
      errorCopy.email='Email is required';
      valid=false;
    }
    setErrors(errorCopy);
    return valid;
  }
  function pageTitle(){
    if(id){
      return "Update Employee"
    }else{
      return "Add Employee"
    }
  }
  return (
    <div className='container' style={{marginTop:"80px"}}>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>{pageTitle()}</h2>
          <div className='card-body'>
            <form action="">
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input type="text"
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName?'is-invalid':''}`}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
                {errors.firstName &&<div className='invalid-feedback'>{errors.firstName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input type="text"
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName?'is-invalid':''}`}
                  onChange={(e)=>setLastName(e.target.value)}
                />
                {errors.lastName &&<div className='invalid-feedback'>{errors.lastName}</div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input type="text"
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email?'is-invalid':''}`}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                {errors.email &&<div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
            </form>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default EmployeeComponent
