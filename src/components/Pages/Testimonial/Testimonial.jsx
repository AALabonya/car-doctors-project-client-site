/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

import TestBtn from './TestBtn';
const Testimonial = () => {
    return (
        <div>
            <div className="mt-10">
            <div className="space-y-4">
          <h4 className="text-[#FF3811] text-center font-bold">Testimonial</h4>
             <h1 className="text-3xl font-bold text-center">What Customer Says</h1>
             <p className="text-center">The majority have suffered alteration in some form, by injected humour, or randomized <br/> 
             words which do not look even slightly believable. </p>
          </div>
          
        </div>
        <div className='overflow-x-hidden' >
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        
        modules={[ A11y]}
        className="mySwiper"> */}

        {/* <SwiperSlide>
          <div className='overflow-x-hidden'>
            
            <div>

            <div className="flex justify-around">

<div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[50px] w-[50px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-base lg:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-xs lg:text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-xs lg:text-base antialiased font-light">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 
  3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[50px] w-[50px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans lg:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-xs  antialiased font-light leading-relaxed text-blue-gray-900">
Frontend Lead @ Google
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-xs lg:text-base antialiased font-light">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
</div>
           
            <div className='absolute top-[50%]'>
       <TestBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='overflow-x-hidden'>
            
            <div>

            <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Frontend Lead @ Google
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
</div>
           
            <div className='absolute top-[50%]'>
       <TestBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='overflow-x-hidden'>
            
            <div>

            <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Frontend Lead @ Google
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
</div>
           
            <div className='absolute top-[50%]'>
       <TestBtn/>
        </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='overflow-x-hidden'>
            
            <div>

            <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Frontend Lead @ Google
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
</div>
           
            <div className='absolute top-[50%]'>
       <TestBtn/>
        </div>
          </div>
          </div>
        
        </SwiperSlide>
        
      </Swiper>
      
    </div> */}
        <Swiper
   breakpoints={{
    570: { slidesPerView: 1, spaceBetween: 70 },
    768: { slidesPerView: 1, spaceBetween: 10 },
    1152: { slidesPerView:1, spaceBetween: 90 }
}}
         centeredSlides={true}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination,]}
         className="mySwiper"
      >
        <SwiperSlide> 
        <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div>

            </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div>
           </SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>

</div></SwiperSlide>
        <SwiperSlide> <div className="flex justify-around">

<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
<div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
<img
src="https://i.ibb.co/ySdcHsc/Ellipse-2.png"
alt="tania andrew"
className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
/>
<div className="flex w-full flex-col gap-0.5">
<div className="flex items-center justify-between">
<h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Tania Andrew
</h5>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fillOpacity="0.2"/>
<path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fillOpacity="0.2"/>
</svg>
</div>
</div>
<p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
Businessman
</p>
</div>
</div>
<div className="p-0 mb-6">
<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
</p>
<div className="flex items-center gap-0 5">
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-5 h-5 text-yellow-700"
>
<path
  fillRule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  clipRule="evenodd"
></path>
</svg>
</div>
</div>

</div>
</div>

</SwiperSlide>

      </Swiper> 
    
        </div>
        </div>
    );
};

export default Testimonial;