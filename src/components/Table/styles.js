import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTable = styled.table`
  width: 100%;
  min-width: 800px;
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
      background-color: #FFCDCD;
    }
  }
  thead > tr {
    color: white;
    background-color: #ff3859;
  }
`;

export const StyledTd = styled.td`
    width: 100px;
    display: flex;
    justify-content: space-around;
`;

export const StyledEmptyTd = styled.td`
    text-align: center;
    font-weight: bold;
    color: #D3D3D3;
`;

export const FavoriteButton = styled.button`
    margin-top: 5px;
    background-color: none;
    background: none;
    color: #ccc;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    :hover{
        color: #eb0;
    }
`;

export const TrashButton = styled.button`
    margin-top: 5px;
    background-color: none;
    background: none;
    color: #f22;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    :hover{
        color: #e11;
    }
`;

export const TableResponsive= styled.div`
  overflow: scroll;
  width: 100%;
  max-width: 100%;
  height: 600px;
`;