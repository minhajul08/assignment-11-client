import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";


const HotelBooking = () => {
    const {user} = useContext (AuthContext);
    const [bookings,setBookings] = useState ([]);

    useEffect(() => {
        getData()
      }, [user])
    
      const getData = async () => {
        const { data } = await axios(
          
          `http://localhost:5000/booking/${user?.email}`
        )
        console.log (data)
        setBookings(data)
      }

      const handleDelete = id => {
        try {
          Swal.fire({
            title: "Are you sure?",
            text: "You Cancel the booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
              const { data } =  axios.delete(
                `http://localhost:5000/booking/${id}`
              )
              getData()
            
              Swal.fire({
                title: "Cancel!",
                text: "Your room has been cancelled.",
                icon: "success"
              });
            }
          });
          
        } catch (err) {
          console.log(err.message)
        
        }
      }
    return (
        <div>
            <h1 className="text-5xl text-center font-semibold mb-1 "><span className="text-[#bdac62]">Booking</span> Room</h1>
            <hr className="w-60 h-[2px] mt-5 bg-[#bdac62] mx-auto"></hr>
            <div className="overflow-x-auto">
  <table className="table text-xl">
    {/* head */}
    <thead>
    <tr className="text-xl">
        <th>Room</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
   {bookings.map (booking =>  <tbody key={booking._id}>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-24 rounded">
                <img
                  src={booking.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {booking.email}
        </td>
        <td>
          <button onClick={() => handleDelete(booking._id)} className="text-xl"><RiDeleteBin5Fill /></button>
        </td>
        <th>
          <td ><MdEdit /></td>
        </th>
      </tr>
      
    </tbody>)}
   
  </table>
</div>
        </div>
    );
};

export default HotelBooking;