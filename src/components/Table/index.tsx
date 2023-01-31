import React, { useState } from "react";
import { CustomTable } from "./styles";
import Input from "../Input";
import { TextArea, StyledTd } from "./styles";

type RowTypes = {
  date: string;
  timeStart: string;
  timeEnd: string;
  totalNumber: number;
  justification: string;
};

export default function Table() {
  const [rowsData, setRowsData] = useState<Array<RowTypes>>([]);

  const addTableRows = () => {
    const rowsInput = {
      date: "",
      timeStart: "",
      timeEnd: "",
      totalNumber: 0,
      justification: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index: any) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index: any, evnt: any) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    // rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <React.Fragment>
      <CustomTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Total Number Of Hours</th>
            <th>Justification</th>
            <th>
              <button onClick={addTableRows}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((item, index) => {
            const { date, timeStart, timeEnd, totalNumber, justification } =
              item;

            return (
              <tr key={index}>
                <td>
                  <Input
                    type={"Date"}
                    value={date}
                    onChange={(e: string) => handleChange(index, e)}
                  />
                </td>
                <td>
                  <Input
                    type={"time"}
                    value={timeStart}
                    onChange={(e: string) => handleChange(index, e)}
                  />
                </td>
                <td>
                  <Input
                    type={"time"}
                    value={timeEnd}
                    onChange={(e: string) => handleChange(index, e)}
                  />
                </td>
                <td>
                  <Input
                    type={"number"}
                    value={totalNumber}
                    onChange={(e: number) => handleChange(index, e)}
                  />
                </td>
                <td>
                  <TextArea value={justification} />
                </td>
                <StyledTd>
                  <button onClick={() => deleteTableRows(index)}>x</button>
                </StyledTd>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>
    </React.Fragment>
  );
}
