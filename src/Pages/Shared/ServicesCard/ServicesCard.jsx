import PropTypes from 'prop-types';

const ServicesCard = ({ service }) => {

    const {title,cover,price,description}=service;

    console.log(service);

    return (
        <div className="col-span-2">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='card-title font-bold text-[#1F2937]'>{title}</h2>
                    <p className='text-base text-[#1F2937] font-normal'>{description}</p>
                    <div className="flex justify-between items-center">
                        <p className='text-lg text-[#1F2937] font-semibold'>{price}</p>
                        <button className='btn btn-neutral text-[#fff]'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;

ServicesCard.propTypes = {
    service: PropTypes.object,
}