import React, { useEffect, useState } from 'react'
import BackEndUrl from '../config/BackendUrl'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import right from '../images/right.avif'
import wrong from '../images/wrong.avif'

const TaskDetail = () => {

    const[mydata, setmydata] = useState([])
      const [page, setPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
       const [status, setStatus] = useState("false");
      const limit=5

    const loadData = async()=>{

        let api = `${BackEndUrl}/admin/taskdetail`
         

        try {
            const response = await axios.get(api,
          { params: { page, limit, taskstatus: status }});
            
          const tasks = response.data.task || [];
          const users = response.data.user || [];
          const merged = tasks.map((t)=>{
            const u = users.find((e)=> e.userid?._id === t.userid) || {};

            return{
              ...t,
              UserName: u.userid?.name || "",
              UserEmail: u.userid?.email || "",
              UserDesignation: u.userid?.designation || "",
            };
          });

          setmydata(merged);
          setTotalPages(response.data.totalPages || 1);
             console.log(response.data);
             setmydata(response.data.data)
            
              

        } catch (error) {
            console.log(error);
            
        }
     
    }
    useEffect(()=>{
        loadData()
    },[page, status]);


    async function deleteTask(id) {
        
        let api=`${BackEndUrl}/admin/deletetask/?id=${id}`

        await axios.get(api).then((res)=>{
            console.log(res.data)
        })
console.log(id)

    }

    async function changeTaskStatus (id){
        
      let api = `${BackEndUrl}/admin/changeTaskStatus/?id=${id}`;

       await axios.get(api).then((res)=>{
        console.log(res.data)
       })
    }

    let no=0;
    const ans = mydata.map((key)=>{
        no++;

        return (
          <>
            <tr id="tr">
              <td id="td">
                {key.taskstatus ? (
                  <>
                    <img src={right} width="30" height="30" />
                  </>
                ) : (
                  <>
                    <img src={wrong} width="30" height="30" />
                  </>
                )}
              </td>

              <td id="td">{no}</td>
              <td id="td">{key.userid.name}</td>
              <td id="td">{key.userid.email}</td>
              <td id="td">{key.title}</td>
              <td id="td">{key.description}</td>

              {key.taskstatus ? (
                <>
                  <td id='td'>
                    <Button
                      variant="success"
                      onClick={() => {
                        changeTaskStatus(key._id);
                      
                      }}
                    >
                      ReAssign
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td id='td'>
                    <Button variant="danger">Pending...</Button>
                  </td>
                </>
              )}
              <td id='td'>
                <Button variant="dark"
                  onClick={() => {
                    deleteTask(key._id);
                  }}
                >
                  delete
                </Button>
              </td>
            </tr>
          </>
        );
    })


  return (
    <>
      <div id="con">
        <h1 id="heading">Task Detail List</h1>

        <Table id="tbl" striped bordered hover>
          <thead className="head">
            <tr id="tr">
              <th id="th">#</th>
              <th id="th">sr. no</th>
              <th id="th">Employee name</th>
              <th id="th">Email</th>
              <th id="th">Task title</th>
              <th id="th">Description</th>
              <th id="th">Action</th>
              <th id="th">Delete</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"5px"
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

          </>
  );
}

export default TaskDetail