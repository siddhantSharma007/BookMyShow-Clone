import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/movies');

        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  
  const displayedMovies = movies.slice(0, 5);
  const displayedMovies1 = movies.slice(5, 10);
  const displayedMovies2 = movies.slice(10, 15);
  const displayedMovies3 = movies.slice(15, 20);
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div className=''>
          <Carousel />

   {/* Banner */}

   <div className='mt-6 mx-4 sm:mx-14'>
    <img src={require('../images/banner1.png')} alt='banner'></img>
   </div>
   <div className=''>
        <h2 className='float-left text-[25px] ml-20 font-bold mt-3mb-0'>Recommended Movies</h2>         
        </div> </div>
       
        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5 mx-4 sm:mx-20'>
        {displayedMovies.map((movie) => (
          <div className="">
            <div className="card rounded-xl">
              <img src={movie.url} className="card-img-top h-[400px]" alt='pic' />
              <div className="card-body">
              <h3 className='card-text text-black font-bold font-serif text-xl'>{movie.name}</h3>
                <p className="card-text">{movie.Date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
   
      <div className='mt-6 mx-4 sm:mx-14'>
            <img className='' src={require('../images/banner2.png')} alt='banner'></img>
          </div>
        </div>
        <h2 className='float-left text-[25px] ml-20 font-bold mt-3 mb-0'>Popular Movies</h2> 
        {/* Popular Mvies */}
        <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5 mx-4 sm:mx-20'>
        {displayedMovies1.map((movie) => (
          <div className="">
            <div className="card rounded-xl">
              <img src={movie.url} className="card-img-top h-[400px]" alt='pic' />
              <div className="card-body">
              <h3 className='card-text text-black font-bold font-serif text-xl'>{movie.name}</h3>
                <p className="card-text">{movie.Date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

          {/* Table */}

          <div className='d-flex justify-start'>
          <h2 className='float-left text-[25px] ml-20 font-bold mt-3 mb-0'>Trending Searches Right Now</h2>
          </div>
          <div className='flex justify-start mt-5 mx-4 sm:mx-20'>
  <table class="">
    <tbody>
    <tr className='bg-white font-serif font-bold'>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">Salaaar Part-1</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">Dunki</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2"  colspan="3">
    <a href="/#" class="text-red-600">Animal</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">Tikamaka Thanda</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2" colSpan="2">
    <a href="/#" class="text-red-600">Jio Presents Hamleys Wonderland</a>
    <p className='text-black'>Activities</p>
  </td>
</tr>
<tr className='font-serif font-bold'>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">World of Christmas at Jio World</a>
    <p className='text-black'>Activities</p>
  </td>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">Sam Bahadur</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-4">
    <a href="/#" class="text-red-600">Jawan</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2" colspan="3">
    <a href="/#" class="text-red-600">Tiger 3</a>
    <p className='text-black'>Movies</p>
  </td>
  <td class="py-2 px-2">
    <a href="/#" class="text-red-600">Dulhan Hum Le Jayenge</a>
    <p>Movies</p>
  </td>
</tr>

    </tbody>
  </table>
</div>



          {/* Popular Events */}
          <h2 className='float-left text-[25px] ml-20 font-bold mt-3 mb-0'>Popular Events</h2> 
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5 mx-4 sm:mx-20'>
        {displayedMovies2.map((movie) => (
          <div className="">
            <div className="card rounded-xl">
              <img src={movie.url} className="card-img-top h-[400px]" alt='pic' />
              <div className="card-body">
              <h3 className='card-text text-black font-bold font-serif text-xl'>{movie.name}</h3>
                <p className="card-text">{movie.Date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
         

        {/* Category Box */}
        
        <h2 className='float-left text-[25px] ml-20 font-bold mt-3 mb-0'>The Bet of Live Events Events</h2> 
        <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5 mx-4 sm:mx-20'>
        <div className="">
          <a href='/#'>
            <div className="card rounded-xl">
              <img src={require('../images/b1.png')} className="card-img-top h-[180px]" alt="..." />
            </div>
            </a>
          </div>
        
          <div className="">
          <a href='/#'>
            <div className="card rounded-xl">
              <img src={require('../images/b2.png')} className="card-img-top h-[180px]" alt="..." />
            </div>
            </a>
          </div>
        
          <div className="">
          <a href='/#'>
            <div className="card rounded-xl">
              <img src={require('../images/b3.png')} className="card-img-top h-[180px]" alt="..." />
            </div>
            </a>
        </div>
     
        <div className="">
        <a href='/#'>
            <div className="card rounded-xl">
              <img src={require('../images/b4.png')} className="card-img-top h-[180px]" alt="..." />
            </div>
            </a>
          </div>
          <div className="">
          <a href='/#'>
            <div className="card rounded-xl">
              <img src={require('../images/b5.png')} className="card-img-top h-[180px]" alt="..." />
            </div>
            </a>
          </div>
          </div>
          

          {/* Popular Mvies */}
          <h2 className='float-left text-[25px] ml-20 font-bold mt-3 mb-0'>Latest Plays</h2> 
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5 mx-4 sm:mx-20'>
        {displayedMovies3.map((movie) => (
          <div className="">
            <div className="card rounded-xl">
              <img src={movie.url} className="card-img-top h-[400px]" alt='pic' />
              <div className="card-body">
                <h3 className='card-text text-black font-bold font-serif text-xl'>{movie.name}</h3>
                <p className="card-text">{movie.Date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
         

{/* Footer */}
<div className='bg-black h-[720px]'>
<div className='h-20 bg-black mt-5'>
  <div>
  <p className='float-start ml-14 mt-3 font-bold text-white'>List your Show Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
  </div><div>
 <button className='bg-[#950740] rounded-lg mt-3 text-white w-32 h-10'>Contact today!</button>
 </div>
 </div>
<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6'style={{ backgroundColor: 'rgb(76,76,76)' }} > 
  <div className='ml-[50%]'>
    <a  className=" " href='/#'> 
      <img className='h-20 w-12 ' src={require('../images/support.png')} alt='b1'></img>
    </a>
    <p className=' text-[8pxpx] mr-[80%] mt-3 text-white'>24/7 Customer Support</p>
  </div>
  <div className='ml-[50%]'>
    <a   href='/#'>
      <img className='h-20 w-12' src={require('../images/tickets.png')} alt='b2'></img>
    </a>
    <p className=' text-[8pxpx] mr-[80%] mt-3 text-white'>Resend Booking Confirmation</p>
  </div>
  <div className='ml-[50%]'>
    <a  href='/#'>
      <img className='h-20 w-12' src={require('../images/newsletter.png')} alt='b3'></img>
    </a>
    <p className=' text-[16px] mr-[80%] mt-3 mb-3 text-white'>Subscribe the Newsletter</p>
  </div>
</div>
</div>
<div className='h-[100px] bg-black'>
<div class="flex items-center justify-between">
  <div class="w-1/2 h-px bg-white"></div>
  <img src='https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png' alt="Your" className="h-16 m-auto sm:h-24"/>
 <div class="w-1/2 h-px bg-white"></div>
</div>

<div className=' bg-black items-center flex space-x-4 pt-3 pb-3 justify-center '>
  <a className="hover:text-white cursor-pointer" href='/#'>
    <i className="fab fa-youtube text-xl"></i>
  </a>
  <a className="hover:text-white cursor-pointer" href='/#'>
    <i className="fab fa-facebook text-xl"></i>
  </a>
  <a className="hover:text-white cursor-pointer" href='/#'>
    <i className="fab fa-instagram text-xl"></i>
  </a>
  <a className="hover:text-white cursor-pointer" href='/#'>
    <i className="fab fa-linkedin text-xl"></i>
  </a>
  </div>
<div className='bg-black'>
  <p className='text-white text-[11px] pt-3'>Copyright 2023 © Bigtree Entertainment Pvt. Ltd.</p> 
  <p className='text-white text-[11px]'>All Rights Reserved.
The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
</div>
</div>
    </>
  );
};

export default Home;
