import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import RoomDetails from "../Pages/RoomDetails";
import PrivateRoutes from "../Providers/PrivateRoutes";
import Booking from "../Pages/Booking";
import HotelBooking from "../Pages/HotelBooking";
import UpdateDate from "../Pages/UpdateDate";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/room/:id',
          element: <PrivateRoutes>
            <RoomDetails></RoomDetails>
          </PrivateRoutes>,
       
          loader: ({params}) => fetch (`http://localhost:5000/room/${params.id}`)
        },
        {
          path: '/updateDate/:id',
          element: <UpdateDate></UpdateDate>,
          // loader: ({params}) => fetch (`http://localhost:5000/room/${params.id}`)
        },
    
        {
          path: '/room',
          element: <Booking></Booking>,
          // loader: fetch ('http://localhost:5000/rooms')
        },
        {
          path: '/booking',
          element: <PrivateRoutes>
            <HotelBooking></HotelBooking>
          </PrivateRoutes>
        },
      ]
    },
  ]);

  export default router;