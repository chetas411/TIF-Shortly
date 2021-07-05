import React from 'react';
import styled from 'styled-components';
import ButtonRounded from '../UI/Buttons/ButtonRounded';

const NavBarContainer = styled.div`
    display: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & a {
        text-decoration: none;
        color: ${props => props.theme.colors.darkGray};
        margin-left: 2rem;
    }
    & a:hover {
        color: ${props => props.theme.colors.darkBlue};
    }
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const NavBarMenu = () => {
    return (
        <NavBarContainer>
            <div id="nav-menu">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>
            <div id="login-menu">
                <a href="#">Login</a>
                <a href="#">
                    <ButtonRounded
                        btnWidth="7rem"
                        btnColor={props => props.theme.colors.white}
                        btnBgColor={props => props.theme.colors.cyan}
                    >
                        Sign Up
                    </ButtonRounded>
                </a>
            </div>
        </NavBarContainer>
    )
}

export default NavBarMenu;
