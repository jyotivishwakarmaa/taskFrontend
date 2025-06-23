import React, { useEffect, useState } from 'react'
import BackEndUrl from '../config/BackendUrl';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AssignTask = () => {

        const [mydata, setMydata] = useState([]);
        const[show,setShow]=useState('false')
        const[userid,setUserid]=useState('')
        const[inp,setInp]=useState({})
          const [page, setPage] = useState(1);
              const [totalPages, setTotalPages] = useState(1);
               const [status, setStatus] = useState("false");
              const limit=5
        const handleClose = () => setShow(false);

    

    const loadData=async()=>{

        let api = `${BackEndUrl}/admin/showuserdata`;
        try {

            const response = await axios.get(api, {
              params: { page, limit, taskstatus: status },
            });
            setMydata(response.data.data);
            setTotalPages(response.data.totalPages);
            console.log(response.data);
            
        } catch (error) {
            
            console.log(error);
            
        }
    }
    useEffect(()=>{
        loadData()
    },[page,status])


   async function handleShow(id){
       
    setShow(true);
    setUserid(id) 
    console.log(userid);
   

   }

   async function handleInput(e){
     
     let name= e.target.name
     let value=e.target.value 

     setInp(values=>({...values,[name]:value}))


   }

    async function handleSubmit(e){
        e.preventDefault()

        let api = `${BackEndUrl}/admin/assigntask`;

        await axios.post(api,{...inp, userid}).then((res)=>{
            console.log(res.data)
        })
    }

    let no = 0;
    const ans = mydata.map((key) => {
      no++;
      return (
        <>
          <tr id="tr">
            <td id="td"> {no} </td>
            <td id="td"> {key.name} </td>
            <td id="td"> {key.email} </td>
            <td id="td"> {key.designation} </td>
            <td id="td">
              <Button
                id="Btn"
                variant="outline-info"
                onClick={() => {
                  handleShow(key._id);
                }}
              >
                Your Tasks
              </Button>
            </td>
          </tr>
        
        </>
      );
    });
    


  return (
    <>
      <div id="con">
        <h1 id="heading">--Assign Tasks to Users--</h1>
        <Table id="tbl" striped bordered hover>
          <thead className="head">
            <tr id="tr">
              <th id="th">Sr. no.</th>
              <th id="th">User Name</th>
              <th id="th">Email</th>
              <th id="th">Designation</th>
              <th id="th">Your Task</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            style={{
              padding: "8px 15px",
              marginRight: 10,
              backgroundColor: page === 1 ? "#ccc" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: page === 1 ? "not-allowed" : "pointer",
            }}
          >
            ⬅ Prev
          </button>

          <span style={{ fontWeight: "bold", margin: "0 10px" }}>
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            style={{
              padding: "8px 15px",
              marginLeft: 10,
              backgroundColor: page === totalPages ? "#ccc" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: page === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next ➡
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="frmmodell">
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body id="bodyy">
          <Form id="usrlogg">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="labll">Enter Task Title</Form.Label>
              <Form.Control type="text" name="title" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="labll">Enter Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="labll">Completion Day</Form.Label>
              <Form.Control
                type="text"
                name="complday"
                onChange={handleInput}
              />
            </Form.Group>
            <Button
              id="logbtnn"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Assign Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AssignTask