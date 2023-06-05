import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    console.log('inside require auth', user);

    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div>
                <h2 className="text-danger">Your Email is not verified</h2>
                <h4 className="text-success">Please verify your email address</h4>
                <button
                    onClick={async () => {
                        const success = await sendEmailVerification();
                        if (success) {
                            toast('Sent email');
                        }
                    }}
                >
                    Send verification email again
                </button>
                <ToastContainer></ToastContainer>
            </div>
        );
    }
    return children;
};

export default RequireAuth;
