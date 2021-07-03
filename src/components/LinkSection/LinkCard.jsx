import React from 'react';
import styled from 'styled-components';
import ButtonPlain from '../UI/Buttons/ButtonPlain';
const Card = styled.div`
    background-color: #ffffff;
    border-radius: 0.5rem;
    margin-bottom: 1.25rem;
`;
const LinkText = styled.p`
    width: 100%;
    padding: 0.75rem;
    font-size: 0.85rem;
    border-bottom: 2px solid #f2eef5f7;
`;

const ShortLink = styled.div`
    width: 100%;
    padding: 0.75rem;

    & p {
        padding-bottom: 0.75rem;
        font-size: 0.85rem;
        color: #2acfcf;
    }
`;

const LinkCard = (props) => {
    return (
        <Card>
            <LinkText>{props.oldLink}</LinkText>
            <ShortLink>
                <p>{props.newLink}</p>
                <ButtonPlain btnWidth="100%" btnColor="#ffffff" btnBgColor="#2acfcf">Copy</ButtonPlain>
            </ShortLink>
        </Card>
    )
}

export default LinkCard;
