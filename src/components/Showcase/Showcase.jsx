import React from 'react';
import styled from 'styled-components';
import ButtonRounded from '../UI/Buttons/ButtonRounded';
import ShowCaseImg from '../../assets/images/illustration-working.svg';

const MidContainer = styled.section`
    width: 100%;
    padding: 1rem 1.25rem;
    margin-bottom: 5rem;
    overflow: hidden;
`;

const ImgContainer = styled.img`
    width: 150%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    & h1{
        font-size: 2.25rem;
        text-align: center;
        font-weight: 900;
        line-height: 2.75rem;
        color: #232127;
        margin-bottom: 1rem;
    }

    & p{
        font-size: 1rem;
        text-align: center;
        color:  #9e9aa7;
        margin-bottom: 1.25rem;
    }
`;


const Showcase = () => {
    return (
        <MidContainer>
            <ImgContainer src={ShowCaseImg} />
            <TextContainer>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <ButtonRounded btnWidth="12rem" btnColor="#ffffff" btnBgColor="#2acfcf">Get Started</ButtonRounded>
            </TextContainer>
        </MidContainer>
    )
}

export default Showcase;