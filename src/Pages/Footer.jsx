import { Link } from 'react-router-dom';
import img1 from '../assets/logo.jpeg'

const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 bg-base-200 text-base-content p-10">
  <nav>
   <div>
   <img className='w-auto h-10 lg:h-20 mix-blend-multiply' src={img1} alt="grand hotel" />
   <h1 className='text-2xl mb-3'>HOTEL</h1>
   </div>
   <div className='text-xl '>
    <h2 >4th Floor, H. S. Tower</h2>
    <h2 className='mb-3'>Waves-1 Dargah Gate, Sylhet</h2>
   </div>
    <div className='text-xl'>
      <h2>+880 2 55663030</h2>
      <h2>Sylhet@grand-hotel.com</h2>
    </div>
  </nav>
  <nav className='text-xl md:space-y-1 lg:space-y-3'>
    <a className="footer-title">The Hotel</a>
    <a className="link link-hover">Rooms & Suites</a>
    <a className="link link-hover">Experience</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav className='text-xl lg:space-y-3'>
    <h6 className="footer-title">Restaurant</h6>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Seminars</a>
  </nav>
  <nav>
  <h6 className="text-xl lg:text-2xl mb-3 ">“Offer more than a gift voucher, offer an experience”</h6>
  <Link to='/room'><button  className="bg-[#bdac62] hover:bg-[#d8cd9a] hover:text-gray-500 text-white font-bold py-2 px-4 rounded">Book Now</button></Link>
  </nav>
</footer>
<footer className="footer bg-neutral text-neutral-content items-center text-xl p-4 ">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - Grand Hotel</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a className="link link-hover">Terms & Conditions</a>
  <a className="link link-hover">Privacy Policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;