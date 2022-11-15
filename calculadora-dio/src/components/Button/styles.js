import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 5px;
    border: none;
    border-radius: 49%;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    background-color: ${props => props.info === "equal" ? "#AFA" : props.info === "operator" ? "#AAF" : "#808080"};
    &:hover {
        opacity: .6;
    }


`