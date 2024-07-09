import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Booking = () => {
    const [rooms,setRooms] = useState ([]);

    useEffect (() => {
      const getData = async () => {
        const {data} = await axios (`http://localhost:5000/rooms`)
        setRooms (data)
      }
      getData ();
    } ,[])
    return (
        <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    rooms.map (room => <div key={room._id} className="room-card-container">
                        <Link to={`/room/${room._id}`}>
                        <div className="room-card bg-base-100">
                              <figure className="image-wrapper">
                                  <img src={room.image} alt="room" className="room-image" />
                                  <div className="hover-text">
                                      <span>Starting from</span>
                                      <span className='text-3xl'>${room.price_per_night}</span>
                                  </div>
                              </figure>
                          </div></Link>
                          <div className='text-center mt-5'>
                              
                              
                              <p className='text-gray-500 mx-10'> {room.room_description} </p>
                              <Link to={`/room/${room._id}`}><p className='btn-link text-[#bdac62] mt-5 hover:text-black'>Check Details</p></Link>
                          </div>
                      </div>)
                }
            </div>
        </div>
    );
};

export default Booking;