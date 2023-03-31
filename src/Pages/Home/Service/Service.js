import React from 'react';
import './service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="service">
            <img style={{ width: '100%', height: '400px' }} src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>
                <small>{description}</small>
            </p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;
