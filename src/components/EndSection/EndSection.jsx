import React from 'react';
import styled from 'styled-components';
import BgImg from '../../assets/images/bg-boost-mobile.svg';
import ButtonRounded from '../UI/Buttons/ButtonRounded';

const Box = styled.section`
    display: flex;
    width: 100%;
    padding: 5rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${BgImg});
    background-repeat: no-repeat;
    background-position: left top;
    background-color: #3b3054;

    & h1 {
        text-align: center;
        margin-bottom: 1rem;
        color: #ffffff;
    }
`; 

const EndSection = () => {
    return (
        <Box>
            <h1>Boost your links today</h1>
            <ButtonRounded btnWidth="10rem" btnColor="#ffffff" btnBgColor="#26cfcf">Get Started</ButtonRounded>
        </Box>
    )
}

export default EndSection;
