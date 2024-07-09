
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'
// import { Link } from 'react-router-dom'

import { useContext } from "react"

const Navbar = () => {
    const {user,logout} = useContext (AuthContext)
    return (
      <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-10 lg:h-20' src={logo} alt='' />
            <span className='font-bold lg:text-3xl text-[#f8642e]'>Grand Hotel</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/room'>Rooms</Link>
               </li>
               {user && (
                <li>
                  <Link to='/'>Booking</Link>
                </li>
               )}
          {!user && (
              <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
          </ul>
  
         {user && (
             <div className='dropdown dropdown-end z-50'>
             <div
               tabIndex={0}
               role='button'
               className='btn btn-ghost btn-circle avatar'
             >
               <div className='w-10 rounded-full' title={user?.displayName}>
                 <img
                   referrerPolicy='no-referrer'
                   alt='User Profile Photo'
                   src={user?.photoURL}
                 />
               </div>
             </div>
             <ul
               tabIndex={0}
               className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
             >
               <li className='mt-2'>
                 <button onClick={logout} className='bg-gray-200 block text-center'>Logout</button>
               </li>
             </ul>
           </div>
         )}
        </div>
      </div>
    )
  }
  
  export default Navbar