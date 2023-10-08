import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";
import { useEffect, useState } from "react";

const EngagementHome = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('engagementlist.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-16">
            <div className="grid md:grid-cols-6 grid-col-1 gap-3 items-center">
                <div className="md:flex justify-center items-center hidden">
                    <Link className=" text-7xl" to={"/engagement"}><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></Link>
                </div>
                <div className="flex md:hidden font-bold text-5xl justify-center items-center">
                    <p>E</p>
                    <p>N</p>
                    <p>G</p>
                    <p>A</p>
                    <p>G</p>
                    <p>E</p>
                    <p>M</p>
                    <p>E</p>
                    <p>N</p>
                    <p>T</p>
                </div>
                {
                    services.slice(0, 2).map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    >
                    </ServicesCard>)
                }

                <div className="md:hidden justify-center items-center flex">
                    <Link className=" text-7xl" to={"/engagement"}><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></Link>
                </div>
                <div className="hidden md:flex md:flex-col font-bold text-5xl justify-center items-center">
                    <p>E</p>
                    <p>N</p>
                    <p>G</p>
                    <p>A</p>
                    <p>G</p>
                    <p>E</p>
                    <p>M</p>
                    <p>E</p>
                    <p>N</p>
                    <p>T</p>
                </div>
            </div>
        </div>
    );
};

export default EngagementHome;