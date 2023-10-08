import { useEffect, useState } from "react";
import ServicesCard from "../Shared/ServicesCard/ServicesCard";

const Weddings = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('weddingslist.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 items-center">
                {
                    services.map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    >
                    </ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Weddings;