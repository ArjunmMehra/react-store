import styled from 'styled-components'

export const ButtonContainer= styled.button`
    background: transparent;
    font-size: 1.4rem;
    text-transform: capitalize;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    trasition: all 0.5s ese-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline:none;
    }`

