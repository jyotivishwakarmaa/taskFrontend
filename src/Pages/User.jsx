import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BackEndUrl from '../config/BackendUrl';
import axios from 'axios';

const User = () => {

    const[Name, setName] = useState("");
    const[Email, setEmail] = useState("");
    const[Designation, setDesignation] = useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = `${BackEndUrl}/admin/usercreation`;
  
        try {
            
            const response = await axios.post(api, {name:Name, email:Email, designation:Designation});
            console.log(response);
            
        } catch (err) {
            console.log(err);
            
        }
     
    }

  return (
    <>
     
        <div id="formbackk">
         <Form id="frmm">
          <h2>Create New User</h2> <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" value={Name} onChange={((e)=>{setName(e.target.value)})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email"value={Email} onChange={((e)=>{setEmail(e.target.value)})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Designation</Form.Label>

         <Form.Select aria-label="Default select example" 
         value={Designation} onChange={(e)=>setDesignation(e.target.value)}>
                        <option>--Select Designation--</option>
                        <option>Programmer</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>DataBase Developer</option>
                        <option>Analyst</option>
                        <option>Coder</option>
                    </Form.Select>
                </Form.Group>

        <Button id='btnn' variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
     </div>
    </>
  );
}

export default User