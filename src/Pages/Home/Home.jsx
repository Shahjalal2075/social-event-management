import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";
import AnniversariesHome from "./AnniversariesHome";
import BabyShowerHome from "./BabyShowerHome";
import BirthdayHome from "./BirthdayHome";
import EngagementHome from "./EngagementHome";
import RetirementHome from "./RetirementHome";
import WeddingsHome from "./WeddingsHome";

const Home = () => {
    return (
        <div>
            <div className="mt-5">
                <Banner></Banner>
                <WeddingsHome></WeddingsHome>
                <BirthdayHome></BirthdayHome>
                <AnniversariesHome></AnniversariesHome>
                <EngagementHome></EngagementHome>
                <RetirementHome></RetirementHome>
                <BabyShowerHome></BabyShowerHome>
                <Portfolio></Portfolio>
            </div>
        </div>
    );
};

export default Home;