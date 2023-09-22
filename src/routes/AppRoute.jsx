import { Route,Routes } from "react-router";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
function AppRoute(){
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            
        </Routes>
        </>
    )
}
export default AppRoute;