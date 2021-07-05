import styled from 'styled-components';

const ButtonPlain = styled.button`
    padding: 0.75rem;
    width: ${props => props.btnWidth};
    color: ${props => props.btnColor};
    background-color: ${props => props.btnBgColor};
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

export default ButtonPlain;