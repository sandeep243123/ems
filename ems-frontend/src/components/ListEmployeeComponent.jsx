import React, { useEffect, useState } from 'react'
import { deleteEmployee, getEmployee, listEmployees } from '../services/EmployeeService';
import { Link,useNavigate } from 'react-router-dom';
function ListEmployeeComponent() {
  const [employees,setEmployees]=useState([]);
  const navigator=useNavigate();
  useEffect(()=>{
    getAllEmployee();
  },[])


  function getAllEmployee(){
    listEmployees().then((response)=>{
      setEmployees(response.data)      
    }).catch(error=>{
      console.error(object)
    })
  }
  function addNewEmployee(){
    navigator('/add-employee')
  }
  function updateEmployee(id){

    navigator(`/edit-employee/${id}`)
  }
  function removeEmployee(id){
    deleteEmployee(id).then((response)=>{
      getAllEmployee()
    })
  }
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button type="button" className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee=><tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td className='text-center d-flex'>
                <button  type="button" className="btn btn-secondary w-100" onClick={()=>{
                  updateEmployee(employee.id)
                  }}>Update</button>
                
                <button type="button" className="btn btn-danger w-100" onClick={()=>removeEmployee(employee.id)}>Delete</button>  
              </td>
            </tr>)
          }
          <tr>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default ListEmployeeComponent
