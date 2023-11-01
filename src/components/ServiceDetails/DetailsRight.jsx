/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const DetailsRight = ({ detailsData }) => {
    const { img, title, description, price, facility } = detailsData || {}


    return (
        <div>
            <div className="bg-base-100 shadow-xl space-y-5">
                <img src={img} alt="Shoes" className="rounded-md lg:w-[1000px]" />
                <div className="">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description}</p>

                    <div className="flex gap-10">
                        <div className="lg:w-[460px] lg:h-52 p-8 border rounded-md bg-base-200">
                           <h1 className="font-bold"> {facility?.[0].name}</h1>
                           <p> {facility?.[1].details}</p>
                        </div>
                        <div className="w-[460px] h-52 p-8 border rounded-md bg-base-200"><h1 className="font-bold"> {facility?.[1].name}</h1>
                           <p> {facility?.[1].details}</p></div>
                    </div>
                    <div className="flex gap-10 mt-5">
                        <div className="w-[460px] h-52 p-8 border rounded-md bg-base-200"><h1 className="font-bold"> {facility?.[2].name}</h1>
                           <p> {facility?.[1].details}</p></div>
                        <div className="w-[460px] h-52 p-8 border rounded-md bg-base-200"><h1 className="font-bold"> {facility?.[3].name}</h1>
                           <p> {facility?.[1].details}</p></div>
                    </div>
                    <p className="mt-5">{description}</p>
                    <div>
                        <h1 className="font-bold text-2xl">3 Simple Steps to Process</h1>
                        <p className="mt-4">{description}</p>
                        <div className="flex gap-10 mt-4">
                            <div className='w-40 h-40 border rounded-md'>
                                <div className="flex justify-center items-center mt-8 ">
                                    <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 83 83" fill="none">
                                        <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                        <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" /> 
                                    </svg>
                                    <p className="absolute top-4 text-white ml-5">01</p>
                                    </div>
                                </div>
                                <p className="text-center">Step One</p>
                                <p className="text-center text-xs">It uses a dictionary of over 200 </p>
                            </div>
                            <div className='w-40 h-40 border rounded-md'>
                                <div className="flex justify-center items-center mt-8 ">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 83 83" fill="none">
                                        <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                        <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" /> 
                                    </svg>
                                    <p className="absolute top-4 text-white ml-5">02</p>
                                    </div>
                                </div>
                                <p className="text-center">Step Two</p>
                                <p className="text-center text-xs">It uses a dictionary of over 200 </p>
                            </div>
                            <div className='w-40  h-40 border rounded-md'>
                                <div className="flex justify-center items-center mt-8 ">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 83 83" fill="none">
                                        <circle cx="41.5" cy="41.5" r="41.5" fill="#FF3811" fillOpacity="0.1" />
                                        <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" /> 
                                    </svg>
                                    <p className="absolute top-4 text-white ml-5">03</p>
                                    </div>
                                </div>
                                <p className="text-center">Step Three</p>
                                <p className="text-center text-xs">It uses a dictionary of over 200 </p>
                            </div>
                            <div>
                           
                            </div>
                            
                        </div>
                        <div className="mt-8">
                            <img src="https://i.ibb.co/dmWppVZ/2.jpg" alt="" className="lg:h-[500px] lg:w-[1000px] rounded-md" />
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsRight;