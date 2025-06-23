import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../config/BackendUrl";



const Home = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Email,Password)

    try {
      let api = `${BackEndUrl}/admin/login`;
      const response = await axios.post(api, { email: Email, password: Password });
     // console.log(response);
      localStorage.setItem("adminUsr", response.data.admin.name);
      navigate("/dashboard");
      // alert("Login")
    }
     catch (err) {
      //console.log(err);
       alert(err.response.data.msg);
      
    }
  };

  return (
    <>
      <div id="backgrnd">
        <div id="container">
          <div id="formback">
            <Form id="frm" >
              <h1 id="log">Admin Log in</h1> <br />
              <br />
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              >
                <Form.Label className="text-white ">Email address</Form.Label> 
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                value={Password}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              >
                <Form.Label className="text-white text-2xl">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>{" "}
              <br />
              <Button
                variant="primary"
                type="submit"
                id="btn"
                onClick={handleSubmit}
              >
                Let's Login
              </Button>
              <br />
              <br />
          
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
