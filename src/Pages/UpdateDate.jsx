import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const UpdateDate = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    if (user) {
      const { data } = await axios.get(`http://localhost:5000/booking/${user.email}`);
      setBookings(data);
      console.log(data);
    }
  };

  const handleUpdateDate = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/updateDate/${id}`, {
        bookingDate: startDate
      });
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated!",
          text: "Your booking date has been updated.",
          icon: "success"
        });
        navigate ('/booking')
        getData(); // Refresh data after update
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen">
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
        {bookings.map((booking) => (
          <div key={booking._id} className="flex items-center space-x-4">
            <button
              onClick={() => handleUpdateDate(booking._id)}
              className="bg-[#bdac62] hover:bg-[#d8cd9a] hover:text-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              Update Booking Date
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateDate;
