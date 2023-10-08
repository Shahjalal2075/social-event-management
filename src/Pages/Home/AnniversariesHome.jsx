import { useEffect, useState } from "react";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AnniversariesHome = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('weddingslist.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-16">
            <div className="grid grid-cols-6 gap-3 items-center">
                <div className="flex flex-col font-bold text-5xl justify-center items-center">
                    <p>A</p>
                    <p>N</p>
                    <p>N</p>
                    <p>I</p>
                    <p>V</p>
                    <p>E</p>
                    <p>R</p>
                    <p>S</p>
                    <p>A</p>
                    <p>R</p>
                    <p>Y</p>
                </div>
                {
                    services.slice(0, 2).map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    >
                    </ServicesCard>)
                }
                <div className="flex justify-center items-center">
                    <Link className=" text-7xl" to={"/anniversary"}><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></Link>
                </div>

            </div>
        </div>
    );
};

export default AnniversariesHome;