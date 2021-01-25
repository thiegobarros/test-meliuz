import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
  background-color: white;
  position: absolute;

  ul {
    padding-inline-start: 0 !important;
  }

  li {
    list-style: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  li:hover{
    background-color: #efefef;
  }
`;