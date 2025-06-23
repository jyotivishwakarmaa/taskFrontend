import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/esm/Table";
import BackEndUrl from "../config/BackendUrl";

const Projects = () => {
  const [taskList, setTasklist] = useState([]);
  const loadData = async () => {
    try {
      let api = `${BackEndUrl}/user/allTasks`;
      const response = await axios.get(api);
      console.log(response.data);
      setTasklist(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  
//   const headingStyle = {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#33ff33",
//     textShadow: "0 0 5px rgba(0,255,0,0.4)",
//   };
//   const containerStyle = {
//     padding: "20px",
//     background: "#121212",
//     minHeight: "100vh",
//     fontFamily: "Poppins, sans-serif",
//     color: "#c7c7c7",
//   };

//   const cardStyle = {
//     borderRadius: "20px",
//     background: "#1e1e1e",
//     padding: "20px",
//     boxShadow: "inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #2a2a2a",
//   };
  const ans = taskList.map((key) => {
    return (
      <>
        <tr key={key._id}>
          <td>{key.title}</td>
          <td>
            {key.status === "complete" ? (
              <span style={{ color: "#33ff33" }}>Complete</span>
            ) : (
              <span style={{ color: "red" }}>{key.status}</span>
            )}
          </td>
          <td>{key.complDay}</td>
          <td>{key.name}</td>
          <td>{key.email}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Total Projects :</h2>
        <div style={cardStyle}>
          <Table variant="dark" striped bordered hover responsive>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>User Name</th>
                <th>User Email</th>
              </tr>
            </thead>
            <tbody>{ans}</tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default Projects;
