import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/Form1.css";
const FormPage = () => {

  return (
    <div className="form-main-div">
      <form className="form-div">
        <h1 className="form-head">Registration Form</h1>
        <h3 className="form-head">Personal details</h3>
        <table>
          <tbody>
            <tr>
              <th>
                <label>Full Name</label>
              </th>
              <td className="input-div">
                <input type="text" className="input-field" />
              </td>
            </tr>
            <tr>
              <th>
                <label>Date Of Birth</label>
              </th>
              <td className="input-div">
                <input type="date" className="input-field" />
              </td>
            </tr>
            <tr>
              <th>
                <label>Gender</label>
              </th>
              <td className="input-div">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="input-field"
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="input-field"
                />{" "}
                Female
              </td>
            </tr>
            <tr>
              <th>
                <label>Nationality</label>
              </th>
              <td className="input-div">
                <input type="text" className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile Number</label>
              </th>
              <td className="input-div">
                <input type="tel" className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email Id</label>
              </th>
              <td className="input-div">
                <input type="email" className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Corresponding address</label>
              </th>
              <td className="input-div">
                <input type="text" className="input-field" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="submit-btn-div">
          <NavLink to='personalsubmit'><button type="submit" className="submit-btn" >
            Submit
          </button></NavLink>
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default FormPage;
