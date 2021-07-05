import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ButtonPlain from '../UI/Buttons/ButtonPlain';
import BgImgForLinkMobile from '../../assets/images/bg-shorten-mobile.svg';
import BgImgForLinkDesktop from '../../assets/images/bg-shorten-desktop.svg';
import LinkCard from './LinkCard';
import TimeLine from './TimeLine/TimeLine';

const MainContainer = styled.section`
    width: 100%;
    padding: 1rem 1.25rem;
    margin-top: 10rem;
    background-color: ${props => props.theme.colors.lightGray};
    @media (min-width: 1024px) {
        padding: 1rem 5.25rem;
    }
    @media (min-width: 1200px) {
        padding: 1rem 10rem;
    }
`;

const LinkForm = styled.form`
    padding: 1.25rem;
    margin: 0 auto;
    margin-top: -5rem;
    margin-bottom: 1.25rem;
    background: url(${BgImgForLinkMobile});
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
        color: ${props => props.theme.colors.red};
    }

    & input:focus::placeholder {
        color: ${props => props.theme.colors.red};
        opacity: 0.5;
    }
    & input:focus + label {
        display: ${props => props.showError ? "block" : "none"};
    }
    & label {
        display: ${props => props.showError? "block" : "none"};
        margin-bottom: 1rem;
        font-size: 0.75rem;
        font-style: italic;
        color: ${props => props.theme.colors.red};
    }
    @media (min-width: 768px) {
        width: 75%;
        background: url(${BgImgForLinkDesktop});
        background-repeat: no-repeat;
        background-position: right top;
        background-color: ${props => props.theme.colors.darkViolet};
    }
    @media (min-width: 1024px) {
        width: 100%;
        display: flex;
        margin-top: -3.75rem;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        & input {
            width: 80%;
            margin-bottom: 0;
            order: 1
        }
        & label{
            order: 3;
            margin-bottom: 0;
        }
        & div{
            order: 2
        }
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
    const [userLinks,setUserLinks] = useState([]);
    const [currentLink,setCurrentLink] = useState("");
    const [inputVal,setInputVal] = useState("");
    const [isValid,setIsValid] = useState(true);

    useEffect(()=>{
        const shortUrl = async () => {
           await axios.get(`https://api.shrtco.de/v2/shorten?url=${currentLink}`)
           .then(response => response.data)
           .then(info => info.result.full_short_link)
           .then((sUrl)=>{
               const linkData = {
                   old_link: currentLink,
                   new_link: sUrl
               }
               const updateData = [...userLinks, linkData];
               setUserLinks(updateData);
               console.log(updateData);
           })
           .catch((err)=>console.log(err));
        }
        shortUrl();
    },[currentLink])
    const getShortUrl = (e) => {
        e.preventDefault();
        if (inputVal.length > 0) {
            setCurrentLink(inputVal);
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }
    // if(currentLink.length > 0){
    //     setIsValid(true);
    // }
    return (
        <MainContainer>
            <LinkForm showError={!isValid}>
                <input onChange={(e)=>setInputVal(e.target.value)} type="text" name="link" id="link-input" value={inputVal} placeholder="Shorten a link here..." />
                <label htmlFor="link-input">Please add a link</label>
                <div>
                    <ButtonPlain onClick={getShortUrl} btnWidth="100%" btnColor={props => props.theme.colors.white} btnBgColor={props => props.theme.colors.cyan}>Shorten it!</ButtonPlain>
                </div>
            </LinkForm>
            {
                userLinks.map((links,index)=>{
                    return <LinkCard key={index} oldLink = {links.old_link} newLink = {links.new_link} />
                })
            }
            <TextContainer>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </TextContainer>
            <TimeLine />
        </MainContainer>
    );
};

export default MainSection;
