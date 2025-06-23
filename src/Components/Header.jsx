import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import BackEndUrl from '../config/BackendUrl';
import Form from "react-bootstrap/Form";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { GiNightVision } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navi = useNavigate()
    const[Email, setEmail]=useState("");
    const[Password, setPass]=useState("");
    const[id,setId]=useState('')
    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleSubmit=async(e)=>{
          e.preventDefault();
          console.log(Email,Password)

          let api = `${BackEndUrl}/user/login`;
          try {
            
            const response = await axios.post(api, {email: Email, password: Password});
          console.log(response.data.User._id);
            localStorage.setItem("id", response.data.User._id);

            
            navi(`/userdash`)

          } catch (error) {
            // console.log(error);
            alert(error.response.data.msg);
            
          }
    }

    
        
  return (
    <>
      <div id="header">
        <h1>The Taskify</h1>
      </div>
      <div id="headicn">
        <h2>
          Welcome! <BsFillEmojiSmileFill />
        </h2>
        <FaUserCircle className="icon" onClick={handleShow} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="frmmodel">
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
          <Form id="usrlog">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="labl">Enter Email</Form.Label>
              <Form.Control
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label id="labl">Password</Form.Label>
              <Form.Control
                type="password"
                value={Password}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </Form.Group>
            <Button id='logbtn' variant="primary" type="submit" onClick={handleSubmit}>
              Let's Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header