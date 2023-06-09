import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServiceDetail = (serviceId) => {
    // const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-services-server-tau.vercel.app/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return [service];
};

export default useServiceDetail;
