import { Link } from "react-router-dom";
import logo from "./../../assets/assets/logo.svg"
const DetailsLeft = ({detailsData}) => {

    return (
        <div>
            <div className="w-80 w h-[360px] bg-base-200 rounded-md">
                 <div className="p-8">
                 <h1 className="font-bold text-lg">Services</h1>
                 <div className="flex bg-orange-700 justify-between text-white py-2 rounded-md p-2 font-semibold mb-2"> <p>{detailsData.title}</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
                 <div className="flex justify-between bg-white py-2 rounded-md p-2 font-semibold mb-2"><p className="text-lg rounded-md mb-2">Engine Repair</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
                 <div className="flex  justify-between bg-white py-2 rounded-md p-2 font-semibold mb-2"><p className="text-lg rounded-md font-semibold mb-2">Automatic Services</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
                 <div className="flex  justify-between bg-white py-2 rounded-md p-2 font-semibold mb-2"><p className="text-lg">Engine Oil Change</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
                 <div className="flex  justify-between bg-white py-2 rounded-md p-2 font-semibold mb-2"><p className="text-lg">Battery Charge</p><p className=" text-red-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
                
                 </div>

            </div>
            <div className="w-80 w h-[260px] bg-black text-white rounded-md ">
           <div className="p-8">
           <h1 className="font-bold text-lg">Download</h1>
                 <div className="flex text-white py-2 rounded-md p-2 font-semibold mb-2"><p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p> <p className="mr-5">Our Brochure <br/><span className="text-xs">Download</span> </p> <p className=" "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
<div className="flex text-white py-2 rounded-md p-2 font-semibold mb-2"><p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p> <p className="mr-5 items-center">Company Details <br/><span className="text-xs">Download</span></p> <p className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></p></div>
           </div>
           
            </div>
            <div className="w-80 w h-[360px] bg-black text-white rounded-md mt-8">
                <div className="flex justify-center mt-5 ">
                    <img src={logo} alt="" className="text-white mt-10" />
                </div>
                <div className="text-center"><p>Need Help? We Are Here</p>
                        <p>To Help You</p>
                </div>
                <div className="">
                <div className="w-28 h-20 bg-white ml-[110px] rounded-md">
                    <p className="text-black text-xs mb-4">Car Doctor Special</p>
                    <p className="text-black text-xs">Save up to 60% off</p>
                </div>
                </div>
            </div>
            <div className="p-8 bg-white text-black font-bold text-xl"> <p>Price: $ {detailsData.price} </p>
            <Link to={`/checkout/${detailsData._id}`}><button className="btn btn-block bg-orange-700 text-white">Proceed Checkout</button></Link></div>
        </div>
    );
};

export default DetailsLeft;