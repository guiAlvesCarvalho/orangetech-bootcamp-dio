import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #000;
    max-width: 425px;
    padding: 20px;
    border-radius: 20px;

    @media (max-width: 520px) {
        max-width: 320px;
    }

    @media (max-width: 425px) {
        max-width: 270px;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${props => props.marginTop && css`
        margin-top: 5px;
    `}
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`