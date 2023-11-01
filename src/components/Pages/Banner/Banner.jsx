import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import SliderBtn from '../../Shared/SliderBtn/SliderBtn';

const Banner = () => {
    return (
        <div>

<div className='overflow-x-hidden' >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        
        modules={[ A11y]}
        className="mySwiper">

        <SwiperSlide>
          <div className='overflow-x-hidden'>
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/v1FWB0F/5.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px] rounded-md" />
            </div>
            <div>
            <div className="absolute flex-1 transform -translate-y-1/2 top-1/2">
            <h1 className='font-bold text-white lg:text-5xl ml-5 lg:ml-24 lg:w-[300px]'>Affordable Price For Car Servicing</h1>
                  <p className='font-semibold text-white lg:text-lg ml-5 lg:ml-24 mt-5 lg:w-[400px]'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                  <div >
                  <button className="btn btn-outline mt-8 lg:ml-24 mr-6 text-white bg-[#FF3811]">Discover More</button>
                   <button className="btn btn-outline mr-4 text-white hover:bg-[#FF3811]">Latest Projec</button>
                  </div>
             </div>
            <div className='right-12  absolute top-[80%]'>
        <SliderBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='overflow-x-hidden'>
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/dmWppVZ/2.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px] rounded-md" />
            </div>
            <div>
            <div className="absolute flex-1 transform -translate-y-1/2 top-1/2">
            <h1 className='font-bold text-white lg:text-5xl ml-5 lg:ml-24 lg:w-[300px]'>Affordable Price For Car Servicing</h1>
                  <p className='font-semibold text-white lg:text-lg ml-5 lg:ml-24 mt-5 lg:w-[400px]'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                  <div >
                  <button className="btn btn-outline mt-8 lg:ml-24 mr-6 text-white bg-[#FF3811]">Discover More</button>
                   <button className="btn btn-outline mr-4 text-white hover:bg-[#FF3811]">Latest Projec</button>
                  </div>
             </div>
            <div className='right-12  absolute top-[80%]'>
        <SliderBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='overflow-x-hidden'>
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/ZL3Ls4H/3.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px] rounded-md" />
            </div>
            <div>
            <div className="absolute flex-1 transform -translate-y-1/2 top-1/2">
            <h1 className='font-bold text-white lg:text-5xl ml-5 lg:ml-24 lg:w-[300px]'>Affordable Price For Car Servicing</h1>
                  <p className='font-semibold text-white lg:text-lg ml-5 lg:ml-24 mt-5 lg:w-[400px]'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                  <div >
                  <button className="btn btn-outline mt-8 lg:ml-24 mr-6 text-white bg-[#FF3811]">Discover More</button>
                   <button className="btn btn-outline mr-4 text-white hover:bg-[#FF3811]">Latest Projec</button>
                  </div>
             </div>
            <div className='right-12  absolute top-[80%]'>
        <SliderBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='overflow-x-hidden'>
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/HNMdffm/4.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px] rounded-md" />
            </div>
            <div>
            <div className="absolute flex-1 transform -translate-y-1/2 top-1/2">
            <h1 className='font-bold text-white lg:text-5xl ml-5 lg:ml-24 lg:w-[300px]'>Affordable Price For Car Servicing</h1>
                  <p className='font-semibold text-white lg:text-lg ml-5 lg:ml-24 mt-5 lg:w-[400px]'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                  <div >
                  <button className="btn btn-outline mt-8 lg:ml-24 mr-6 text-white bg-[#FF3811]">Discover More</button>
                   <button className="btn btn-outline mr-4 text-white hover:bg-[#FF3811]">Latest Projec</button>
                  </div>
             </div>
            <div className='right-12  absolute top-[80%]'>
        <SliderBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
      
    </div>
        </div>
    );
};

export default Banner;