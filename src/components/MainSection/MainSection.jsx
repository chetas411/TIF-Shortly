import React from 'react';
import styled from 'styled-components';
import ButtonPlain from '../UI/Buttons/ButtonPlain';
import BgImgForLink from '../../assets/images/bg-shorten-mobile.svg';
import LinkCard from './LinkCard';
import TimeLine from './TimeLine/TimeLine';

const MainContainer = styled.section`
    width: 100%;
    padding: 1rem 1.25rem;
    background-color: ${props => props.theme.colors.lightGray};
`;

const LinkForm = styled.form`
    padding: 1.25rem;
    margin: 0 auto;
    margin-top: -5rem;
    margin-bottom: 1.25rem;
    background: url(${BgImgForLink});
    background-repeat: no-repeat;
    background-position: right top;
    background-color: ${props => props.theme.colors.darkViolet};
    border-radius: 0.5rem;
    & input,& buttonPlain {
        display: block;
    }
    & input {
        margin-bottom: 0.75rem;
        padding: 0.75rem;
        width: 100%;
        border-radius: 0.25rem;
        border: none;
        outline: none;
        font-size: 0.85rem;
    }
    & input:focus {
        border: 0.15rem solid ${props => props.theme.colors.red};
        margin-bottom: 0.25rem;
        color: ${props => props.theme.colors.red};
    }

    & input:focus::placeholder {
        color: ${props => props.theme.colors.red};
        opacity: 0.5;
    }
    & input:focus + label {
        display: block;
    }
    & label {
        display: none;
        margin-bottom: 1rem;
        font-size: 0.75rem;
        font-style: italic;
        color: ${props => props.theme.colors.red};
    }
    @media (min-width: 768px) {
        width: 75%;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
    & h1, & p {
        text-align: center;
    }

    & h1 {
        color: ${props => props.theme.colors.darkBlue};
        margin-bottom: 1rem;
    }

    & p {
        font-size: 0.85rem;
        color: ${props => props.theme.colors.blueGray};
    }
`;



const MainSection = () => {
    return (
        <MainContainer>
            <LinkForm action="submit" method="post">
                <input type="url" name="link" id="link-input" placeholder="Shorten a link here..." />
                <label htmlFor="link-input">Please add a link</label>
                <ButtonPlain btnWidth="100%" btnColor={props => props.theme.colors.white} btnBgColor={props => props.theme.colors.cyan}>Shorten it!</ButtonPlain>
            </LinkForm>
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <TextContainer>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </TextContainer>
            <TimeLine />
        </MainContainer>
    );
};

export default MainSection;
