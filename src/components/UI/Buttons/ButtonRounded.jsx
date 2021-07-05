import styled from 'styled-components';

const ButtonRounded = styled.button`
    padding: 0.75rem;
    width: ${props => props.btnWidth};
    color: ${props => props.btnColor};
    background-color: ${props => props.btnBgColor};
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export default ButtonRounded;