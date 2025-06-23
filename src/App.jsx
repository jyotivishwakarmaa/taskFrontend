import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from '../Layout'
import Dashboard from './Pages/Dashboard'
import User from './Pages/User'
import UserDashboard from './Pages/UserDashboard'
import AssignTask from './Pages/AssignTask'
import UserTask from './Pages/UserTask'
import TaskDetail from './Pages/TaskDetail'
import ChangePass from './Pages/ChangePass'
import Test from './Pages/Test'
import SearchTask from './Pages/SearchTask'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="user" element={<User />} />
            <Route path="assigntask" element={<AssignTask />} />
            <Route path="taskdetail" element={<TaskDetail />} />
            <Route path="test" element={<Test/>} />
            <Route path="search" element={<SearchTask/>} />
          </Route>
        </Routes>

        <Routes>
          <Route path="userdash" element={<UserDashboard />}>
            <Route path="usertask" element={<UserTask />} />
            <Route path="changepass" element={<ChangePass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
