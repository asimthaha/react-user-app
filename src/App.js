import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAdd from "./components/UserAdd";
import UserView from "./components/UserView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<UserAdd />}></Route>
          {/* <Route path="search" element={<MovieSearch />}></Route> */}
          {/* <Route path="delete" element={<MovieDelete />}></Route> */}
          <Route path="view" element={<UserView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
