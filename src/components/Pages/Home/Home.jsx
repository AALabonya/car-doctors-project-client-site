import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../ChooseUS/Choose";
import Location from "../Location/Location";
import OurProduct from "../OurProduct/OurProduct";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
             <About/>
             <Services/>
             <Location/>
             <OurProduct/>
             <Team/>
             <Choose/>
             <Testimonial/>
        </div>
    );
};

export default Home;