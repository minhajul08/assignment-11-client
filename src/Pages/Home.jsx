
import HotelData from "./Leaflet/HotelData";
import HotelLocation from "./Leaflet/HotelLocation";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="lg:flex justify-between gap-5">
            <HotelLocation></HotelLocation>
             <HotelData></HotelData>
            </div>
        </div>
    );
};

export default Home;