import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Background = () => {
  return (
    <>
      <div>
        <NavBar />
        <div>
        <div className='relative flex justify-center items-center'>
            <img
              className='h-[480px] w-full object-cover absolute opacity-80 blur-[1px]'
              src='https://i.ytimg.com/vi/uiyhHUqOtuA/maxresdefault.jpg'
              alt='poster'
            />
          <div className='grid grid-cols-2 sm:grid-cols-1 mt-3 sm:mx-20'>
            <div className='relative '>
              <div className='card rounded-xl relative overflow-hidden mr-[925px] h-[440px]'>
             
                <img
                  src={require('../images/8.png')}
                  className='w-full  object-cover h-[400px]'
                  alt='pic'
                />
                
                <div className='card-body  bg-black border'>
                  <p className='card-text text-white '>In cinemas</p>
                </div>
              </div>
            </div>           
            </div>
          </div>
        </div>
 
      </div>
      <div>
        <div className='h-[200px] w-[65%] border-b-2'>
          <h1 className='pt-5 ml-20 font-bold  text-2xl text-start'>About the Movie</h1>
          <p className='ml-16 mt-3 font-arial'>This is the story of a son whose love for his father knows no bounds. As their bond begins to fracture, a chain of extraordinary events unfold causing the son to undergo a remarkable transformation consumed by a thirst for vengeance.</p>
          </div>
        <div className='h-[350px] w-[65%] border-b-2'>
        <h1 className='pt-5 ml-20 font-bold  text-2xl text-start'>Cast</h1>
        <div className='grid grid-cols-1 sm:grid-cols-5 mt-5 sm:mx-20'>
        <div className='flex flex-col items-center'>
        <img src='https://resizing.flixster.com/0nn7Qhe08O79QXBJkeOp-ja0-Q0=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/509114_v9_ba.jpg' className='rounded-full h-[120px] w-[110px] '  alt='Cinque Terre' />
        <h4 className=' mt-2'>Ranbir Kapoor</h4>
        <p>as Ranvijay Balbir Singh</p>
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXOyoytyTp2vvScASfjmbM_pcwpKLOLuVr3cDGQfGS-y3viaSmRFQTnbZOORyfvrtDLc&usqp=CAU' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Bobby Deol</h4>
        <p>as Abrar</p>
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9QrwcWbOMFpKuu-2OzjDQBnZ-cYJeGGQ7045LFMM62qH0R4Ek' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />

        <h4 className=' mt-2'>Tripti Dimri</h4>
        <p>Zoya</p>
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/rashmika_mandanna_trolling_should_i_leave-one_one.jpg?VersionId=u22Z6jb.g2jfq_7Ky37GMViyzAzDZDCG' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Rashmika mandanna</h4>
        <p>as Geethanjali</p>
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Anil Kapoor</h4>
        <p>as Balbir Singh</p>
        </div>
        </div>
       
          </div>
        <div className='h-[340px] w-[65%] border-b-2'>
        <h1 className='pt-5 ml-20 font-bold  text-2xl text-start'>Crew</h1>
        <div className='grid grid-cols-1 sm:grid-cols-5 mt-5 sm:mx-20'>
        <div className='flex flex-col items-center'>
        <img src='https://cdn.gulte.com/wp-content/uploads/2020/09/Sandeep-Reddy-Vanga.jpg' className='rounded-full h-[120px] w-[110px] '  alt='Cinque Terre' />
        <h4 className=' mt-2'>Sandeep Reddy Vanga</h4>
       
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyZg85yFqkU9CU9XrcaMI8X1l0LgVM_SBHUd626l0hJN3fe7-r0Cz8NSv3UWcZaPu3Wo&usqp=CAU' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Amit Roy</h4>
       
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Bhushan_Kumar_at_the_launch_of_%E2%80%98Simran%E2%80%99_trailer.jpg' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Bhushan Kumar</h4>
       
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://www.filmibeat.com/img/315x100x396/popcorn/profile_photos/harshavardhan-rameshwar-20230331191820-41069.jpg' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Harshavardhan Rameshwar</h4>
       
        </div>
        <div className='flex flex-col items-center'>
        <img src='https://media.licdn.com/dms/image/C4E03AQEUAIzIm6GecA/profile-displayphoto-shrink_800_800/0/1570557907559?e=2147483647&v=beta&t=EVW_TH5_e_fAetMMB86MbJraYqCLF5gfrSsWAarltFY' className=' rounded-full h-[120px] w-[110px]'  alt='Cinque Terre' />
        <h4 className=' mt-2'>Pranay Reddy Vanga</h4>
       
      </div>
      <div className='text1 '>
        <h1 className='absolute top-[13rem] left-[30%] text-4xl text-white font-bold'>Animal</h1>
         <h3 className=' absolute top-[18rem] left-[30%] text-2xl text-white font-bold'>8.3/10 557K Votes</h3>
         <p className='absolute top-[22rem] left-[30%] text-xl text-white font-bold'>3h 21m • Action,Crime,Drama•A • 1 Dec 2023</p>
         <button className='absolute h-14 rounded-lg w-[200px] bg-red-500 top-[30rem] left-[30%] text-base text-white font-bold'>Book Tickets</button>
      </div>
      </div>
        </div>
          </div>
          <Footer />
    </>
  );
}

export default Background;
