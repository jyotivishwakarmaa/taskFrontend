import React, { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackendUrl";
import { Table } from "react-bootstrap";

const TestTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("false");
  const limit = 5;

  const loadData = async () => {
    try {
      const res = await axios.get(`${BackEndUrl}/admin/test`, {
        params: { page, limit, taskstatus: status },
      });
      const tasks = res.data.task || [];
      const users = res.data.user || [];
      const merged = tasks.map((t) => {
        const u = users.find((e) => e.userid?._id === t.userid) || {};
        return {
          ...t,
          userName: u.userid?.name || "",
          userEmail: u.userid?.email || "",
          userDesignation: u.userid?.designation || "",
        };
      });
      setData(merged);
      setTotalPages(res.data.totalPages || 1);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, [page, status]);
 let sno=1;
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ color: "black", textAlign: "center", paddingLeft:"110px"}}>---All Tasks Detail---</h1>
      {/* <div style={{ textAlign: "center", margin: "20px" }}>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="false">🕒 Incomplete</option>
          <option value="true">✅ Completed</option>
        </select>
      </div> */}

      <Table
        style={{
          margin: "100px 300px",
          width: "90%",
          borderCollapse: "collapse",
          height:"500px"
        }}
      >
        <thead style={{ background: "transparent" }}>
          <tr id="tr">
            {[
              "Sno",
              "User",
              "Email",
              "Designation",
              "Title",
              "Description",
              "Days",
              "Status",
            ].map((h) => (
              <th
                id="th"
                key={h}
                style={{ padding: 8, border: "1px solid black" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr id="tr" key={r._id}>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {sno++}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.userName}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.userEmail}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.userDesignation}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.title}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.description}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.compday}
              </td>
              <td id="td" style={{ padding: 8, border: "1px solid black" }}>
                {r.taskstatus ? "✅" : "🕒"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ marginTop: 20, textAlign: "center", marginLeft:180}}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          style={{
            padding: "8px 15px",
            marginRight: 20,
            backgroundColor: page === 1 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
        >
          ⬅ Prev
        </button>
        <span style={{ fontWeight: "bold" }}>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          style={{
            padding: "8px 15px",
            marginLeft: 20,
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
  );
};

export default TestTable;
