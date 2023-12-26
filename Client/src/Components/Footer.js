import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
          <div className='bg-black h-[720px]'>
        <div className='h-20 bg-black mt-5'>
          <div>
          <p className='float-start ml-14 mt-3 font-bold text-white'>List your Show Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
          </div><div>
        <button className='bg-red-600 rounded-lg mt-3 text-white w-32 h-10'>Contact today!</button>
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
    </div>
    </>
  )
}

export default Footer