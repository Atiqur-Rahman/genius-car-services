import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    };
    return (
        <div className="service">
            <img style={{ width: '100%', height: '250px' }} src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>
                <small>{description}</small>
            </p>
            <button onClick={() => navigateToServiceDetail(_id)} className="btn btn-primary">
                Book: {name}
            </button>
        </div>
    );
};

export default Service;
