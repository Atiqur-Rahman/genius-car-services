import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className="mt-3 px-3">OR</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            <div>
                <button className="btn btn-info w-50 d-block mx-auto my-2">
                    <img src={google} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
                <button className="btn btn-info w-50 d-block mx-auto my-2">
                    <img src={facebook} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
                <button className="btn btn-info w-50 d-block mx-auto">
                    <img src={github} alt="" />
                    <span className="px-2">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
