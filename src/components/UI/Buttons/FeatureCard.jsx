import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    width: 100%;
    padding: 2rem 1.25rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin-bottom: 6rem;
    z-index: 2;
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        padding: 1.25rem;
        margin: 0 auto;
        margin-top: -4.5rem;
        border-radius: 50%;
        background-color: #3b3054;
    }
    & h2, & p {
        text-align: center;
    }
    & h2 {
        margin-top: 2rem;
        color: #232127;
        font-size: 1.25rem;
    }

    & p {
        margin-top: 1rem;
        color: #9e9aa7;
        font-size: 0.85rem;
    }

`;

const FeatureCard = (props) => {
    return (
        <Card>
            <div>
                <img src={props.featIcon} alt="brand-icon" />
            </div>
            <h2>{props.heading}</h2>
            <p>{props.subtext}</p>
        </Card>
    )
}

export default FeatureCard;
