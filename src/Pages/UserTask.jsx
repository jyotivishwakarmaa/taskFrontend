import React, { useEffect, useState } from 'react'
import BackEndUrl from '../config/BackendUrl'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

const UserTask = () => {

    const[mydata, setMydata] = useState([])

  const loadData = async()=>{
   const id= localStorage.getItem('id')
    let api = `${BackEndUrl}/user/usertask/?id=${id}`
    
    try {
      
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
      

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    loadData();
  }, [])

      const submitTask = async(id)=>{

        let api = `${BackEndUrl}/user/completetask/?id=${id}`;

        try {
          
          const response = await axios.get(api);
          console.log(response);
          
        } catch (error) {
          console.log(error);
            
        }

        loadData()
        
      } 
      
      const ans = mydata.map((key)=>{
      
        return(

          <>
          
            <tr id='tr'>
            <td id='td'>{key.title}</td>
            <td id='td'>{key.description}</td>
            <td id='td'>{key.compday}</td>
            <td id='td'>

            {key.taskstatus ? (
              <>
               <Button  style={{backgroundColor:"green", border:"none"}} disabled>Task Submited</Button>
                </>) :(<>
                       <Button onClick={()=>{submitTask(key._id)}}>Submit Task</Button>
                </>)}
               
            </td>
          </tr>
          
          </>
        )
      })

  return (
    <>
      <div id="con">
        <h1 id="heading">Task List Given by Admin</h1>

        <Table id="tbl" striped bordered hover>
          <thead className="head">
            <tr id='tr'>
              <th id='th'>Title</th>
              <th id='th'>Description</th>
              <th id='th'>Completion Time</th>
              <th id='th'>Status</th>
            </tr>
          </thead>

          <tbody>{ans}</tbody>
        </Table>
      </div>
    </>
  );
}

export default UserTask