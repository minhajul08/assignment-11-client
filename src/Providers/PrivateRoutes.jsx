import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext (AuthContext);
     const location = useLocation ()
     console.log (location.pathname);
     if (loading) {
         return <FadeLoader color="#36d7b7" />
     }
     if (user) {
         return children;
     }
     return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
 };
export default PrivateRoutes;