import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useState } from "react";
import { BsTextareaResize } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";


const RoomDetails = () => {
    const {user} = useContext (AuthContext)
    const rooms = useLoaderData ()
    const navigate = useNavigate ();
    const [startDate, setStartDate] = useState(new Date());
    const {_id,
        price_per_night,
         image ,
         room_description,
         room_size,
         booking_date,
         available  

        } = rooms;
    const handelButton = ()  => {
        Swal.fire({
            title: "Are you sure?",
            text: "You booking this room!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const { data } =  axios.post('http://localhost:5000/booking', booking);
                navigate ('/booking')
              Swal.fire({
                title: "Confirm!",
                text: "Your room has been booked.",
                icon: "success"
              });
            }
          });
         const bookingDate = booking_date;
         const available = 'available'
         const email =user?.email;
         const photo = image

        const booking = {
            bookingDate,
            available,
            email,
            photo
        }
        
    }
    
    return (
        <div className="">
            <img className="w-full" src={image} alt="" />
            <div className="my-12 flex justify-between">
            <div className="space-y-5">
                <p className="text-3xl">From ${price_per_night}</p>
                <div className="flex gap-5">
                <p className="flex items-center gap-3"><BsTextareaResize /> {room_size}</p>
                <p className="bg-[#f8642e] text-white font-bold py-2 px-4 rounded">{available}</p>
                </div>
                <p>{room_description}</p>
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
                <button onClick={handelButton} className=" bg-[#bdac62] hover:bg-[#d8cd9a] hover:text-gray-500 text-white font-bold py-2 px-4 rounded">Book Now!</button>
            </div>
            </div>
           
        </div>
    );
};

export default RoomDetails;
