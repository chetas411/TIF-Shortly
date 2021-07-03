import React from 'react';
import styled from 'styled-components';
import ButtonPlain from '../UI/Buttons/ButtonPlain';
import BgImgForLink from '../../assets/images/bg-shorten-mobile.svg';
import LinkCard from './LinkCard';
import TimeLine from '../UI/Buttons/TimeLine';

const LinkContainer = styled.section`
    width: 100%;
    padding: 1rem 1.25rem;
    background-color: #f2eef5f7;
`;

const LinkForm = styled.form`
    padding: 1.25rem;
    margin-top: -5rem;
    margin-bottom: 1.25rem;
    background: url(${BgImgForLink});
    background-repeat: no-repeat;
    background-position: right top;
    background-color: #3b3054;
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
        border: 0.15rem solid #f46262;
        margin-bottom: 0.25rem;
        color: #f46262;
    }

    & input:focus::placeholder {
        color: #f46262;
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
        color: #f46262;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
    & h1, & p {
        text-align: center;
    }

    & h1 {
        color: #232127;
        margin-bottom: 1rem;
    }

    & p {
        font-size: 0.85rem;
        color:  #9e9aa7;
    }
`;



const LinkSection = () => {
    return (
        <LinkContainer>
            <LinkForm action="submit" method="post">
                <input type="url" name="link" id="link-input" placeholder="Shorten a link here..." />
                <label htmlFor="link-input">Please add a link</label>
                <ButtonPlain btnWidth="100%" btnColor="#ffffff" btnBgColor="#2acfcf">Shorten it!</ButtonPlain>
            </LinkForm>
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <LinkCard oldLink="https://jsfiddle.net/vcw880fr/1/" newLink="https://rel.link.net/vc/" />
            <TextContainer>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </TextContainer>
            <TimeLine />
        </LinkContainer>
    );
};

export default LinkSection;
