import React from 'react';
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
`;

const LinkText = styled.p`
    padding: 0.75rem;
    font-size: 0.85rem;
    overflow: hidden;
    border-bottom: 2px solid ${props => props.theme.colors.lightGray};
`;

const ShortLink = styled.div`
    padding: 0.75rem;
    & p {
        padding-bottom: 0.75rem;
        font-size: 0.85rem;
        overflow: hidden;
        color: ${props => props.theme.colors.cyan};
    }
`;

const LinkCard = (props) => {
    return (
        <Card>
            <LinkText>{props.oldLink}</LinkText>
            <ShortLink>
                <p>{props.newLink}</p>
                <ButtonPlain btnWidth="100%" btnColor={props => props.theme.colors.white} btnBgColor={props => props.theme.colors.cyan}>Copy</ButtonPlain>
            </ShortLink>
        </Card>
    )
}

export default LinkCard;
