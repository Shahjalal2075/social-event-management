import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";

const BabyShowerHome = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('weddingslist.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-16">
            <div className="grid grid-cols-6 gap-3 items-center">
                <div className="flex justify-center items-center">
                    <Link className=" text-7xl" to={"/birthday"}><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></Link>
                </div>
                {
                    services.slice(0, 2).map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    >
                    </ServicesCard>)
                }
                <div className="flex flex-col font-bold text-5xl justify-center items-center">
                    <p>B</p>
                    <p>A</p>
                    <p>B</p>
                    <p>Y</p>
                    <p>S</p>
                    <p>H</p>
                    <p>O</p>
                    <p>W</p>
                    <p>E</p>
                    <p>R</p>
                </div>
            </div>
        </div>
    );
};

export default BabyShowerHome;