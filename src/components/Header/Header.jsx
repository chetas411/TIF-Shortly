import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import HamBurgerMenu from '../../assets/images/hambureger-menu.svg';
import NavigationMenu from './NavigationMenu';
import NavBarMenu from './NavBarMenu';

const Navbar = styled.header`
    display: flex;
    width: 100%;
    padding: 2.5rem 1.25rem;
    padding-bottom: 1rem;
    justify-content: space-between; 
    @media (min-width: 1024px) {
        padding: 2.5rem 5.25rem;
        justify-content: flex-start;
        align-items: center;
        & #menu-icon {
            display: none;
        }
    }
    @media (min-width: 1200px) {
        padding: 2.5rem 10rem;
    }
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
                <a id="menu-icon" onClick={menuToggle} href="#"><img src={HamBurgerMenu} alt="menu"></img></a>
                <NavBarMenu />
            </Navbar>
            <NavigationMenu show={showMenu} />
        </>
    )
}

export default Header;

