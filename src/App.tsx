import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Trash from "./pages/Trash";
import NewTask from "./pages/NewTask";
import Protected from "./components/Protected";
function App() {
  return (
    <div className="p-1">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/tasks"
          element={
            <Protected>
              <AllTasks />
            </Protected>
          }
        />
        <Route
          path="/tasks/completed"
          element={
            <Protected>
              <CompletedTasks />
            </Protected>
          }
        />
        <Route
          path="/tasks/trash"
          element={
            <Protected>
              <Trash />
            </Protected>
          }
        />
        <Route
          path="/tasks/new"
          element={
            <Protected>
              <NewTask />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
