import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = services.filter((service) => service._id !== id);
                    setServices(remaining);
                });
        }
    };
    return (
        <div className="w-25 mx-auto">
            <h3>Manage your services</h3>
            {services.map((service) => (
                <div key={service._id}>
                    {service.name}
                    <button onClick={() => handleDelete(service._id)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default ManageServices;
