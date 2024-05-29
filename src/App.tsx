import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { History, Tasks, Trash, StarredTasks } from "./pages";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={isLogged ? <Login /> : <Signup />} /> */}
          {/* <Route path="login" element={<Login />} /> */}

          <Route path="tasks" element={<Tasks />} />
          <Route path="history" element={<History />} />
          <Route path="starredTasks" element={<StarredTasks />} />
          <Route path="trash" element={<Trash />} />

          {/* redirect route for any route thats isnt stated for */}
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
  )
}

export default App