import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Link,useNavigate } from 'react-router-dom';


function NavBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const Navigate=useNavigate();

  const logOuthandle=()=> {
    localStorage.removeItem('user');
    Navigate('/');
    window.location.reload();
    
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');

    if (userData) {
      setLoggedIn(userData);
    }
  }, []);

  return (
    <div className='container-fluid mx-auto'>
      <div className='flex justify-between items-center pl-10 pr-10'>
        <div>
          <img
            className='h-16 sm:h-24'
            src='https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png'
            alt='logo'
          />
        </div>
        <div className='hidden sm:block sm:flex-grow mx-3'>
          <input
            type='search'
            className='form-control w-2/4 ml-8'
            placeholder='Search movies, events'
          />
        </div>
        <div className='sm:block font-serif '>
          <h3 className='text-right'>Location</h3>
        </div>
        <div>
          {loggedIn ? (
            <button
              className='bg-[#950740] ml-4 h-8 w-40 rounded-lg text-white hover:cursor-pointer'
              onClick={toggleSidebar}
            >
              {loggedIn}
            </button>
          ) : (
            <button
              className='bg-[#950740] ml-4 h-8 w-40 rounded-lg text-white hover:cursor-pointer'
              onClick={togglePopup}
            >
              SignIn
            </button>
          )}

          {loggedIn && (
            <div
              id="sidebar"
              className={`w-[360px] h-screen bg-white text-black fixed right-0 transition-transform transform ${
                showSidebar ? 'translate-x-0' : 'translate-x-full'
              } z-50`}
            >
       
            <div className=' text-left '>
            <h3 className='h-[60px] text-xl cursor-pointer'>
  <span className='font-bold cursor-pointer'>Hey!</span>
  <p className='text-xs font cursor-pointer'>edit profile</p>
</h3>

        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Get ticket on Whatsaap/SMS<p className='text-xs'>Add your Mobile number</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Notifications</h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Your Orders <p className='text-xs'>View all your bookings and purchases</p></h3>
        </Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Stream Library<p className='text-xs'>Rented and Purchased Movies</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Play Credit Card<p className='text-xs'>View Your Play Credit Card details and offers</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Help & Support<p className='text-xs'>View Commonly asked queries and Chats</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Account & Settings<p className='text-xs'>Location,Payment,Permission & More</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>Rewards<p className='text-xs'>View your rewards & unlock new ones</p></h3></Link>
        <Link to='/#'><h3 className='h-[60px] ml-10 cursor-pointer'>BookASmile</h3></Link>
        <Link to='/#'>
  <button onClick={logOuthandle} className='h-[75px] w-full  border border-solid border-red-800 text-red-500'>
    Sign Out
  </button>
</Link>


      </div>


            </div>
          )}

          {showPopup && (
            <div
              id="login-popup"
              tabIndex="-1"
              className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
            >
              <Login onClose={closePopup} />
            </div>
          )}
        </div>
      </div>
      <div className='snap-mandatory snap-x flex justify-between font-serif h-14 pl-10 pr-10 hover:cursor-pointer' style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <ul className='snap-center flex space-x-8 text-14px sm:text-lg'>
          <li>Movies</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Streams</li>
        </ul>
        <ul className='snap-center flex space-x-8 text-14px sm:text-lg hover:cursor-pointer'>
          <li>Offers</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
