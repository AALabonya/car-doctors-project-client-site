// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
// import axios from "axios";
import useServices from "../../../hooks/useServices";

const Services = () => {
    const service= useServices()
    // console.log(service);
    return (
        <div>
          <div className="space-y-4">
          <h4 className="text-[#FF3811] text-center font-bold">Service</h4>
             <h1 className="text-3xl font-bold text-center">Our Service Area</h1>
             <p className="text-center">The majority have suffered alteration in some form, by injected humour, or randomized <br/> 
             words which do not look even slightly believable. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                 service.map(data=><ServiceCard key={data._id} data={data}></ServiceCard>)
            }
          </div>
          <div className="flex justify-center">
          <button className="text-center btn btn-outline mt-5 mb-5 text-[#FF3811]">More Services</button>
          </div>
        </div>
    );
};

export default Services;