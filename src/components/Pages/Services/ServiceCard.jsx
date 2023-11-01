/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({data}) => {
    const{_id,title, price, img} = data || {}
    return (
        <div>
             <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={img}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
   
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {title}
      </p>
    <div className="flex items-center justify-between mb-2 text-[#FF3811]">
      <p className="block font-sans  antialiased font-medium leading-relaxed ">
       {price}
      </p>
     <Link to={`/serviceDetails/${_id}`}> <p className="block font-sans antialiased font-bold leading-relaxed text-[#FF3811] ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
        
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </p></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;