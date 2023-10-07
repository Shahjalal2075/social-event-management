import PropTypes from 'prop-types';

const PortfolioCard = ({ port }) => {

    const { cover, title } = port;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={cover} alt={title} /></figure>
            <div className="">
                <h2 className="text-lg text-center font-semibold py-2">{title}</h2>
            </div>
        </div>
    );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
    port: PropTypes.object,
}