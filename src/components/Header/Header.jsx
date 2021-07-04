import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import HamBurgerMenu from '../../assets/images/hambureger-menu.svg';
import NavigationMenu from './NavigationMenu';

const Navbar = styled.header`
    display: flex;
    width: 100%;
    padding: 2.5rem 1.25rem;
    padding-bottom: 1rem;
    justify-content: space-between; 
`;

const Header = (props)=>{
    const [showMenu,setShowMenu] = useState(false);
    const menuToggle = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }
    return(
        <>
            <Navbar>
                <img src={Logo} alt="shortly" />
                <a onClick={menuToggle} href="#"><img src={HamBurgerMenu} alt="menu"></img></a>
            </Navbar>
            <NavigationMenu show={showMenu} />
        </>
    )
}

export default Header;

