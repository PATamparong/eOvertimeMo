import styled, { css } from "styled-components";
import { theme } from "../../themes";

export const CustomTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 80%;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  tbody {
    vertical-align: top;
  }
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightyellow;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export const TextArea = styled.textarea`
  margin: 10px;
`;

export const StyledTd = styled.td`
  display: flex;
  margin-top: 40%;
`;
