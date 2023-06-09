import React from 'react';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar hossain',
    //     email: 'akbar@tajmohol.com',
    //     address: 'Tajmohol road, Md.pur',
    //     phone: '01711111111',
    // });

    // const handleAddressChange = (event) => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { newAddress, ...rest };
    //     setUser(newUser);
    // };

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };
        axios.post('https://genius-car-services-server-tau.vercel.app/order', order).then((response) => {
            const { data } = response;
            if (data.insertedId) {
                toast('Your order is booked!!!');
                event.target.reset();
            }
        });
    };

    return (
        <div className="w-50 mx-auto">
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className="w-100 mb-2" type="text" value={user.displayName} name="name" placeholder="name" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="email" value={user.email} name="email" placeholder="email" required disabled />
                <br />
                <input className="w-100 mb-2" type="text" value={service.name} name="service" placeholder="service" required readOnly />
                <br />
                <input className="w-100 mb-2" type="text" name="address" placeholder="address" required autoComplete="off" />
                <br />
                <input className="w-100 mb-2" type="number" name="phone" placeholder="phone" required />
                <br />
                <input className="btn btn-primary" type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
