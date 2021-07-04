import React from 'react';
import styled from 'styled-components';
import ButttonRounded from '../UI/Buttons/ButtonRounded';

const NavContainer = styled.div`
    display: ${props => props.show? "block" : "none"};
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    padding: 1.5rem 1rem;
    background-color: ${props => props.theme.colors.darkViolet};
    color: ${props => props.theme.colors.white};
    border-radius: 0.5rem;
    & a{
        padding: 1rem;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
    & #nav-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props => props.theme.colors.blueGray};
    }

    & #login-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
    }
`;

const NavigationMenu = (props) => {
    return (
        <NavContainer show={props.show}>
            <div id="nav-menu">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>
            <div id="login-menu">
                <a href="#">Login</a>
                <a href="#">
                    <ButttonRounded 
                        btnWidth="15rem" 
                        btnColor={props => props.theme.colors.white}
                        btnBgColor={props => props.theme.colors.cyan}
                    >
                        Sign Up
                    </ButttonRounded>
                </a>
            </div>
        </NavContainer>
    )
}

export default NavigationMenu;
