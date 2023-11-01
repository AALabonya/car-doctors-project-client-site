/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaFacebook ,FaTwitterSquare,FaLinkedinIn,FaInstagramSquare} from "react-icons/fa";
const TeamMember = ({team}) => {

    const{title,profession,image} = team || {}
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
    <img src={image} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {title}
    </h4>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
    {profession}
    </p>
  </div>
  <div className="flex justify-center p-6 pt-2 gap-7">
    <FaFacebook className="text-blue-900"></FaFacebook> 
    <FaTwitterSquare className="text- text-sky-700"></FaTwitterSquare>
    <FaLinkedinIn className="text- text-sky-700"></FaLinkedinIn>
    <FaInstagramSquare className="text-red-950"></FaInstagramSquare>


  </div>
</div>
        </div>
    );
};

export default TeamMember;