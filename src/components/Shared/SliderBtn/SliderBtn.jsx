import { useSwiper } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SliderBtn = () => {
    const swiper = useSwiper()
    return (
        <div className="">
            <button className="btn btn-circle bg-[#FF3811] text-white " onClick={()=>swiper.slidePrev()}>
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </button>
            <button className="btn btn-circle bg-[#FF3811] text-white ml-4" onClick={()=>swiper.slidePrev()}>
            <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
        </div>
    );
};

export default SliderBtn;