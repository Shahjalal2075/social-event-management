import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {

    const services = useLoaderData();

    const { id } = useParams()
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt)

    const { title, cover, price, description } = service;

    return (
        <div className="flex justify-center">
            <div className="w-3/4">
                <img className="w-full" src={cover} alt="" />
                <h2 className="card-title text-3xl font-bold text-[#1F2937] my-8">{title}</h2>
                <p className="text-lg text-[#1F2937] font-normal">{description}</p>
                <div className="flex justify-between items-center my-10">
                    <p className='text-xl text-[#1F2937] font-bold'>Price: {price}</p>
                    <button className='btn btn-neutral text-[#fff]'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;