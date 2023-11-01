import { useSwiper } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const TestBtn = () => {
    const swiper = useSwiper()
    return (
        <div className="flex justify-between">
            <button className="btn btn-circle bg-[#FF3811] text-white lg:ml-8" onClick={()=>swiper.slidePrev()}>
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </button>
            <button className="btn btn-circle bg-[#FF3811] text-white lg:ml-[1100px]" onClick={()=>swiper.slidePrev()}>
            <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
        </div>
    );
};

export default TestBtn;