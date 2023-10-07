import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('portfoliodetails.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-5xl text-[#111] font-bold text-center">Our Portfolio</h2>
            <div className="grid grid-cols-3 gap-4 mt-10">
                {
                    portfolio.map(port => <PortfolioCard
                    key={port.id}
                    port={port}
                    > 
                    </PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;