import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonPlain from '../UI/Buttons/ButtonPlain';

const Card = styled.div`
    background-color: ${props => props.theme.colors.white};
    border-radius: 0.5rem;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    @media (min-width: 768px) {
        width: 75%;
    }
    @media (min-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const LinkText = styled.p`
    padding: 0.75rem;
    font-size: 0.85rem;
    overflow: hidden;
    border-bottom: 2px solid ${props => props.theme.colors.lightGray};
    @media (min-width: 1024px) {
        border-bottom: none;
    }
`;

const ShortLink = styled.div`
    padding: 0.75rem;
    & p {
        padding-bottom: 0.75rem;
        font-size: 0.85rem;
        overflow: hidden;
        color: ${props => props.theme.colors.cyan};
    }
    @media (min-width: 1024px) {
        display: flex;
        width: 40%;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        & p {
            padding-bottom: 0;
        }

        & div {
            min-width: 5rem;
        }
    }
`;

const LinkCard = (props) => {
    const [isCopied,setIsCopied] = useState(false);
    const copyLink = ()=>{
        navigator.clipboard.writeText(props.newLink);
        setIsCopied(true);
        setTimeout(()=>{
            setIsCopied(false);
        },500)
    }
    return (
        <Card>
            <LinkText>{props.oldLink}</LinkText>
            <ShortLink>
                <p>{props.newLink}</p>
                <div>
                    <ButtonPlain onClick={copyLink} btnWidth="100%" btnColor={props => props.theme.colors.white} btnBgColor={props => isCopied ? props.theme.colors.darkViolet : props.theme.colors.cyan}>
                        { isCopied? "Copied" : "Copy" }
                    </ButtonPlain>
                </div>
            </ShortLink>
        </Card>
    )
}

export default LinkCard;
