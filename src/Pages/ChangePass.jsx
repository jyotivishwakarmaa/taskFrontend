import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import BackEndUrl from '../config/BackendUrl'
const ChangePass = () => {


    const[newpass,setNewpass]=useState('')
    const[cnfrm,setCnfrm]=useState('')

    
    async function ChangePass(){
      
         const id=localStorage.getItem('id')
         let api=`${BackEndUrl}/user/chngpass`
         if(newpass==cnfrm && cnfrm !==''){
            await axios.post(api, { id: id, newpass: newpass }).then((res) => {
              console.log(res.data);
              alert("Password change successfully!!")
            });
         }else{
            alert('confirm password not maatch')
         }
      
    }
  return (
    <>
      <div id="formbackk">
        <Form id="frmm">
          <h2>Change Your Password</h2> <br /> <br />
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter new Password</Form.Label>
            <Form.Control
              type="text"
              value={newpass}
              onChange={(e) => {
                setNewpass(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="email"
              value={cnfrm}
              onChange={(e) => setCnfrm(e.target.value)}
            />
          </Form.Group>
          <Button id="btnn" variant="primary" onClick={ChangePass}>
            Change Password
          </Button>
        </Form>
      </div>

      {/* <div id='contnr'>
       <div id='frmdata'>
        New Password<input type='text' padding='20' align='center'  value={newpass} onChange={(e)=>{setNewpass(e.target.value)}} /> <br />
        Confirm Password<input type='text' value={cnfrm} onChange={(e)=>setCnfrm(e.target.value)} /> <br />

        <Button onClick={ChangePass}>Change Password</Button>
    </div>
    </div> */}
    </>
  );
}

export default ChangePass