import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTable = styled.table`
    width: 100%;
  /* caption-side: top; */
  /* border: none; */
  /* border-collapse: collapse; */
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  /* caption-side: bottom; */
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    /* border: none; */
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tr {
    height: 3rem;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #FFC0CB;
    }
  }
  thead > tr {
    color: white;
    background-color: #ff3859;
  }
`;

export const DetailsButton = styled.button`
    background-color: DodgerBlue;
    padding: 2%;
    color: white;
    font-weight: bold;
    border-radius: 5%;
    :hover{
        background-color: SteelBlue;
    }
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledTd = styled.td`
    text-align: center;
`;

export const StyledEmptyTd = styled.td`
    text-align: center;
    font-weight: bold;
    color: #D3D3D3;
`;