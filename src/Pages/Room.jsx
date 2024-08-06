import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard/RoomCard";


const Room = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`https://grandhotel-three.vercel.app/rooms`);
                const limitedData = data.slice(0, 3);
                setRooms(limitedData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        getData();
    }, []);
    return (
        <div>
            <div className="text-center">
                <p className="text-[#bdac62] tracking-normal text-lg">Conscious hospitality</p>
                <h1 className="text-5xl tracking-widest ">ROOMS & SUITS</h1>
                <hr className="w-40 h-[2px] mt-5 bg-[#bdac62] mx-auto"></hr>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Room;