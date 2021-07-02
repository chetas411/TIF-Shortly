import styled from 'styled-components';

const ButtonRounded = styled.button`
    padding: 1rem;
    width: ${props => props.btnWidth};
    color: ${props => props.btnColor};
    background-color: ${props => props.btnBgColor};
    border: none;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export default ButtonRounded;