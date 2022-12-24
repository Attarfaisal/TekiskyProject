import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Form2 = () => {


  return (
    <div className="form-main-div">
    <form className="form-div">
      <h1 className="form-head">Registration Form</h1>
      <h3 className="form-head">Course Details</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <label>Course Name</label>
            </th>
            <td className="input-div">
            <td className="input-div">
                <input
                  type="radio"
                  name="course"
                  value="Front end developer"
                  className="input-field"
                />{" "}
                Front end developer
                <input
                  type="radio"
                  name="course"
                  value="Back end developer"
                  className="input-field"
                />Back end developer
                <input
                  type="radio"
                  name="course"
                  value="full stack developer"
                  className="input-field"
                />Full stack developer
              </td>
            </td>
          </tr>
          <tr>
            <th>Session/Year</th>
            <td><input type='tel' /></td>
          </tr>
        </tbody>
        </table>
        <h3 className="form-head">Educational Details</h3>

        <table border='2px'>
       
        <thead>
        <tr>
        <th>Exam Passed</th>
        <th>Name Of School / Board</th>
        <th>Year of Passing</th>
        <th>% of marks</th></tr>
        </thead>
        <tbody>
            <tr>
            <td>10 <sup>th</sup></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            </tr>
            <tr>
            <td>12 <sup>th</sup></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            </tr>
            <tr>
            <td>Graduation</td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            </tr>
            <tr>
            <td>Other</td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            <td><input type='text' /></td>
            </tr>
           
        </tbody>
        </table>
        
      
      <div className="submit-btn-div">
        <NavLink to='educationsubmit'><button type="submit" className="submit-btn" >
          Submit
        </button></NavLink>
      </div>
    </form>
    
  </div>
  )
}

export default Form2
