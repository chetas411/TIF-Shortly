import styled from 'styled-components';

const ButtonPlain = styled.button`
    padding: 1rem 0.75rem;
    width: ${props => props.btnWidth};
    color: ${props => props.btnColor};
    background-color: ${props => props.btnBgColor};
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export default ButtonPlain;