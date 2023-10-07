import Banner from "../Banner/Banner";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
    return (
        <div>
            <div className="mt-5">
                <Banner></Banner>
                <Portfolio></Portfolio>
            </div>
        </div>
    );
};

export default Home;