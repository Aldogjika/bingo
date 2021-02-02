import React, { useState, useEffect } from "react";
import "./Table.css";
import { tableData, chunkArray } from "../../utils";
import TableCell from "../TableCell/TableCell";

function Table() {
  const [cellValue, setCellValue] = useState(Array(25).fill(null));
  const [chunkedArray, setChunkedArray] = useState([]);

  useEffect(() => {
    setChunkedArray(chunkArray(tableData));
  }, []);

  return (
    <div className="table">
      {chunkedArray?.map((dataChunked, index) => (
        <div key={index} className="table__row">
          {dataChunked?.map((data) => (
            <TableCell
              key={data.index}
              cellValue={cellValue}
              id={data.index}
              data={data.text}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
