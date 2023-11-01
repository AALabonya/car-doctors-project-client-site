import { Link, useLoaderData } from "react-router-dom";
import DetailsRight from "./DetailsRight";
import DetailsLeft from "./DetailsLeft";

const ServiceDetails = () => {
    const detailsData = useLoaderData()
    
    return (
        <div>
            <div className='overflow-x-hidden mb-10'>
        <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://i.ibb.co/v1FWB0F/5.jpg"
            alt="img-blur-shadow" className="w-[1600px] h-[400px] rounded-md" />
        </div>
        <div>
          <div className="absolute flex-1 transform -translate-y-1/2 top-[35%]">
            <h1 className='font-bold text-white bg-[#FF3811] px-3 py-1 rounded-md lg:text-5xl ml-24'>Service Details</h1>
          </div>
          <div className="absolute transform -translate-y-2/3 top-[58%]  ml-[30%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="296" height="50" viewBox="0 0 296 50" fill="none">
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
            </svg>          <ul className="gap-4">
              <Link to="/" className=" absolute top-4 text-xl font-bold text-white ml-12"><li>Home |</li></Link>
              <Link to="/" className=" absolute  top-4 right-10 text-xl font-bold text-white ml-8"><li>Service Details</li></Link>
            </ul>

          </div>
        </div>
      </div>
      <div className="flex">
      <div className="">
       <DetailsRight detailsData={detailsData}></DetailsRight>
       
      </div>
      <div>
        <DetailsLeft detailsData={detailsData}></DetailsLeft>
      </div>
      </div>
        </div>
    );
};

export default ServiceDetails;