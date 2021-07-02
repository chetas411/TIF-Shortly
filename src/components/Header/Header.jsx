import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import HamBurgerMenu from '../../assets/images/hambureger-menu.svg'

const Navbar = styled.header`
    display: flex;
    width: 100%;
    padding: 2.5rem 1.5rem;
    justify-content: space-between; 
`;

const Header = (props)=>{
    return(
        <Navbar>
            <img src={Logo} alt="shortly" />
            <a href="#"><img src={HamBurgerMenu} alt="menu"></img></a>
        </Navbar>
    )
}

export default Header;

