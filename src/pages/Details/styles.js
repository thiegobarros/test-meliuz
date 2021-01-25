import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: #ff3859;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: DodgerBlue;
    color: white;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid SteelBlue;
    outline: none;
    margin-right: 5px;
    :hover{
        background-color: SteelBlue;
    }
`;

export const StyledInput = styled.input`
    margin-right: 5px;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    border: 1px solid #bbb;
    width: 85%;
    margin-bottom: 10px;
`;

export const StyledSelect = styled.select`
    margin-right: 5px;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    border: 1px solid #bbb;
    width: 90%;
    margin-bottom: 10px;
`;

export const Styledlabel = styled.label`
    font-size: 15px;
    font-weight: 600;
    margin: 3px 0;
`;