import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useState } from "react";
import { BsTextareaResize } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const rooms = useLoaderData();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const {
    price_per_night,
    image,
    room_description,
    room_size,
  } = rooms;

  const handelButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are booking this room!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const booking = {
          bookingDate: startDate,
          email: user?.email,
          photo: image
        };

        try {
          await axios.post(`https://grandhotel-three.vercel.app/booking`, booking);

          Swal.fire({
            title: "Confirmed!",
            text: "Your room has been booked.",
            icon: "success"
          });

          navigate('/booking');
        } catch (err) {
          if (err.response && err.response.status === 400) {
            Swal.fire({
              title: "Error!",
              text: "You already have a booking.",
              icon: "error"
            });
          } else {
            console.log(err.message);
          }
        }
      }
    });
  };

  return (
    <div className="">
      <img className="w-full" src={image} alt="" />
      <div className="my-12 lg:flex justify-between">
        <div className="space-y-5">
          <p className="text-3xl">From ${price_per_night}</p>
          <div className="flex gap-5">
            <p className="flex items-center gap-3"><BsTextareaResize /> {room_size}</p>
           
          </div>
          <p className="leading-loose">{room_description}</p>
        </div>
        <div className="space-y-3">
          <div>CHECK-IN: 
            <p className="mt-2">
              <DatePicker 
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
              />
            </p>
          </div>
          <button onClick={handelButton} className="bg-[#bdac62] hover:bg-[#d8cd9a] hover:text-gray-500 text-white font-bold py-2 px-4 rounded">Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
