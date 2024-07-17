import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const HotelBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    if (user) {
      const { data } = await axios.get(`http://localhost:5000/booking/${user.email}`);
      setBookings(data);
    }
  };

  const handleDelete = id => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You will cancel the booking!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:5000/booking/${id}`);
          setBookings(bookings.filter(booking => booking._id !== id));

          Swal.fire({
            title: "Cancelled!",
            text: "Your room has been cancelled.",
            icon: "success"
          });
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-center font-semibold mb-1 ">
        <span className="text-[#bdac62]">Booking</span> Room
      </h1>
      <hr className="w-60 h-[2px] mt-5 mb-8 bg-[#bdac62] mx-auto"></hr>
      <div className="overflow-x-auto">
        <table className="table text-xl">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Room</th>
              <th>Email</th>
              <th>Booking Date</th>
              <th></th>
            </tr>
          </thead>
          {bookings.map(booking => (
            <tbody key={booking._id}>
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
                <td title={booking.email}>
                  {booking.email.substring(0,20)}...
                </td>
                <td>
                {new Date(booking.bookingDate).toLocaleDateString()}
                </td>
                <td>
                  <button onClick={() => handleDelete(booking._id)} className="btn p-2 bg-[#bdac62] text-white hover:text-gray-500 font-bold py-2 px-4 rounded ">
                   Cancel
                  </button>
                </td>
                <th>
                  <td>
                  <Link to={`/updateDate/${booking._id}`}>
                  <button className='btn p-2 bg-[#bdac62] text-white hover:text-gray-500 font-bold py-2 px-4 rounded'>Update Date</button>
                  </Link>
                  </td>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default HotelBooking;
