import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>;
    }

    const navigateRegister = (event) => {
        navigate('/register');
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        } else {
            toast('Please enter your email address');
        }
    };

    return (
        <div className="container mx-auto w-50 mt-3">
            <PageTitle title="Login"></PageTitle>
            <h2 className="text-primary text-center">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>
                New to Genius Car?{' '}
                <Link to="/register" className="text-primary text-decoration-none pe-auto" onClick={navigateRegister}>
                    Please Register
                </Link>
            </p>
            <p>
                Forget Password?{' '}
                <Button className="btn btn-link text-primary bg-white text-decoration-none pe-auto" onClick={resetPassword}>
                    Reset Password
                </Button>
            </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
