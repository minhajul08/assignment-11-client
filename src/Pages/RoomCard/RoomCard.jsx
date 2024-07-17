import React from 'react';
import './RoomCard.css'; // Ensure to import your CSS file
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { _id,price_per_night, image ,room_description} = room;
    return (
        <div className="room-card-container">
          <Link to={`/room/${_id}`}>
          <div className="room-card bg-base-100">
                <figure className="image-wrapper">
                    <img src={image} alt="room" className="room-image" />
                    <div className="hover-text">
                        <span>Starting from</span>
                        <span className='text-3xl'>${price_per_night}</span>
                    </div>
                </figure>
            </div></Link>
            <div className='text-center mt-5'>
                
                {/* <hr className='w-52 h-[2px] mx-auto bg-[#bdac62]'></hr> */}
                <p className='text-gray-500 mx-10'> {room_description.substring(0,100)} </p>
                <Link to={`/room/${_id}`}><p className='btn-link text-[#bdac62] mt-5 hover:text-black'>Check Details</p></Link>
            </div>
        </div>
    );
};

export default RoomCard;

