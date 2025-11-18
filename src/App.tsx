import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
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
      </Routes>
    </div>
  );
}

export default App;
