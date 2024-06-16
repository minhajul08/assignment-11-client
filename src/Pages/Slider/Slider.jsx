import img1 from '../../assets/Banner/1.jpg'
import img2 from '../../assets/Banner/2.jpg'
import img3 from '../../assets/Banner/3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import Slide from './Slide';

export default function Slider() {
  return (
    <div className=' py-8 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide 
        image={img1}
        text={"Luxury Hotel"}
        />
        </SwiperSlide>
        <SwiperSlide><Slide 
        image={img2}
        text={"A Private Enclave Of Luxury"}
         /></SwiperSlide>
        <SwiperSlide><Slide 
        image={img3} 
        text={"Freshness"}
        /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}