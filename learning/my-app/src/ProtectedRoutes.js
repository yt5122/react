import { Outlet } from "react-router-dom";
import { StorageDemo } from "./storage/StorageDemo";

//hook --> use
const useAuth = () =>{

    var name = localStorage.getItem("name");
    const user = name !== null ? true : false;
    return user;
}

const ProtectedRoutes = () =>{

    const isAuth = useAuth();
    return isAuth ? <Outlet/>: <StorageDemo/> ;
}

export default ProtectedRoutes;