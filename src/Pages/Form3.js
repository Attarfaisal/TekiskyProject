import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
const Form3 = () => {
  return (
    <div className="form-main-div">
      <form className="form-div">
        <h1 className="form-head">Registration Form</h1>
        <h3 className="form-head">Declaration</h3>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="The information submitted in admission form is complete and accurate to best of my knowledge and wii abide by company rules."
          />
          
        </Form.Group>
        <Form.Group>
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" placeholder="upload file" />
        </Form.Group>
        <div className="submit-btn-div">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
      </form>
    </div>
  );
};

export default Form3;
