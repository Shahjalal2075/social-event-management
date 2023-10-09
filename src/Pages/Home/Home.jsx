import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import AnniversariesHome from "./AnniversariesHome";
import BabyShowerHome from "./BabyShowerHome";
import BirthdayHome from "./BirthdayHome";
import EngagementHome from "./EngagementHome";
import RetirementHome from "./RetirementHome";
import WeddingsHome from "./WeddingsHome";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 3000,
          once: true,
        });
      }, []);

    return (
        <div>
            <div className="mt-5">
                <div data-aos="fade-down" className="">
                    <Banner></Banner>
                </div>
                <div data-aos="fade-right" className="">
                    <WeddingsHome></WeddingsHome>
                </div>
                <div data-aos="fade-left" className="">
                    <BirthdayHome></BirthdayHome>
                </div>
                <div data-aos="fade-right" className="">
                    <AnniversariesHome></AnniversariesHome>
                </div>
                <div data-aos="fade-left" className="">
                    <EngagementHome></EngagementHome>
                </div>
                <div data-aos="fade-right" className="">
                    <RetirementHome></RetirementHome>
                </div>
                <div data-aos="fade-left" className="">
                    <BabyShowerHome></BabyShowerHome>
                </div>
                <div data-aos="fade-up" className="">
                    <Portfolio></Portfolio>
                </div>
            </div>
        </div>
    );
};

export default Home;