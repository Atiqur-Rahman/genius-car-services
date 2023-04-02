import React from 'react';
import sleeping from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className="text-center text-primary">Mechanic is sleeping</h2>
            <img className="w-50 d-block mx-auto" src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
