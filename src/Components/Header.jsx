import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    };

    const handleRender = () => {
        navigate("/");
    };

    return (
        <div className='absolute py-4 px-8 z-10 bg-gradient-to-b from-black cursor-pointer flex justify-between' onClick={handleRender}>
            <img 
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="Netflix Logo" 
            />
            <div className='flex p-2'>
                <img className='w-12 h-12' src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="User Icon" />
                <button className='font-bold text-white' onClick={handleSignOut}>(Sign out)</button>
            </div> 
        </div>
    );
};

export default Header;
