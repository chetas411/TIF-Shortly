import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    width: 100%;
    padding: 2rem 1.25rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 0.25rem;
    margin: 0 auto;
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
        background-color: ${props => props.theme.colors.darkViolet};
    }
    & h2, & p {
        text-align: center;
    }
    & h2 {
        margin-top: 2rem;
        color: ${props => props.theme.colors.darkBlue};
        font-size: 1.25rem;
    }

    & p {
        margin-top: 1rem;
        color: ${props => props.theme.colors.blueGray};
        font-size: 0.85rem;
    }
    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1024px) {
        width: 18rem;
        transform: rotate(90deg) translate(0,${props => props.shift});
        & div {
            margin: 0;
            margin-top: -4.5rem;
        }
        & h2, & p {
            text-align: left;
        }
    }


`;

const FeatureCard = (props) => {
    return (
        <Card shift = {props.shift}>
            <div>
                <img src={props.featIcon} alt="brand-icon" />
            </div>
            <h2>{props.heading}</h2>
            <p>{props.subtext}</p>
        </Card>
    )
}

export default FeatureCard;
