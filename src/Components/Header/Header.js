import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/login'>Log In</CustomLink>
                <CustomLink to='/offer'>Offers</CustomLink>
                <CustomLink to='/signin'>signin</CustomLink>
            </nav>
        </div>
    );
};

export default Header;