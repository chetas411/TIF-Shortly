import React from 'react';
import styled from 'styled-components';
import ButtonRounded from '../UI/Buttons/ButtonRounded';
import ShowCaseImg from '../../assets/images/illustration-working.svg';

const MidContainer = styled.section`
    width: 100%;
    padding: 1rem 1.25rem;
    margin-bottom: 5rem;
    overflow: hidden;

    @media (min-width: 1024px) {
        display: flex;
        padding: 1rem 5.25rem;
        padding-right: 0;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center
    }
    @media (min-width: 1200px) {
        padding: 1rem 10rem;
    }
`;

const ImgContainer = styled.img`
    width: 150%;
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 1024px) {
        max-width: 25rem;
    }
    @media (min-width: 1200px) {
        max-width: 30rem;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    margin-top: 2.25rem;
    & h1{
        font-size: 2.25rem;
        text-align: center;
        font-weight: 900;
        line-height: 2.75rem;
        color: ${props => props.theme.colors.darkBlue};
        margin-bottom: 1rem;
    }

    & p{
        font-size: 1rem;
        text-align: center;
        color:  ${props => props.theme.colors.darkGray};
        margin-bottom: 1.25rem;
    }
    @media (min-width: 1024px) {
        width: 60%;
        align-items: flex-start;

        & h1, & p {
            text-align: left;
        }

        & h1 {
            max-width: 20rem;
        }

        & p {
            max-width: 25rem;
        }
    }

`;


const Showcase = () => {
    return (
        <MidContainer>
            <ImgContainer src={ShowCaseImg} />
            <TextContainer>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <ButtonRounded btnWidth="12rem" btnColor={props => props.theme.colors.white} btnBgColor={props => props.theme.colors.cyan}>Get Started</ButtonRounded>
            </TextContainer>
        </MidContainer>
    )
}

export default Showcase;
