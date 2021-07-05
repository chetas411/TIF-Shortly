import React from 'react';
import styled from 'styled-components';
import BgImgMobile from '../../assets/images/bg-boost-mobile.svg';
import BgImgDesktop from '../../assets/images/bg-boost-desktop.svg';
import ButtonRounded from '../UI/Buttons/ButtonRounded';

const Box = styled.section`
    display: flex;
    width: 100%;
    padding: 5rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${BgImgMobile});
    background-repeat: no-repeat;
    background-position: right top;
    background-color: ${props => props.theme.colors.darkViolet};
    & h1 {
        text-align: center;
        margin-bottom: 1rem;
        color: ${props => props.theme.colors.white};
    }

    @media (min-width: 1024px) {
        margin-top: -15rem;
        background: url(${BgImgDesktop});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: ${props => props.theme.colors.darkViolet};
    }
`; 

const EndSection = () => {
    return (
        <Box>
            <h1>Boost your links today</h1>
            <ButtonRounded btnWidth="10rem" btnColor={props => props.theme.colors.white} btnBgColor={props => props.theme.colors.cyan}>Get Started</ButtonRounded>
        </Box>
    )
}

export default EndSection;
