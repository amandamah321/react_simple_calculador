import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 1px;
    border: 1px solid black;
    background-color: #37C432;
    cursor: pointer;
    font-size: 18px;
    border: none;
    width: 100%;

    border-radius: 20px;

    &: hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
    }
`