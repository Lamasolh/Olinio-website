import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import TablePage from "../pages/Table/Table";

function RoutingR() {
    return (
        <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/login" exact element={< Login />} />
            <Route path="/SignUp" exact element={< Signup />} />
            <Route path="/table" exact element={< TablePage />} />
        </Routes>
    );
}

export default RoutingR;
