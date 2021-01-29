import React, { useState, useEffect } from "react";
import "./TableCell.css";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";

function TableCell({ id, data, cellValue }) {
  const [{ wins }, dispatch] = useDataLayerValue();
  const [lines, setLines] = useState([
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ]);

  const [clicked, setClicked] = useState(false);
  const [win, setWin] = useState([]);

  const calculateWinner = (cellValue, lines) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];

      if (
        cellValue[a] &&
        cellValue[a] === cellValue[b] &&
        cellValue[a] === cellValue[c] &&
        cellValue[a] === cellValue[d] &&
        cellValue[a] === cellValue[e]
      ) {
        win.push(lines[i]);
        dispatch({ type: "UPDATE_WINS", wins: win });
        lines.splice(i, 1);

        setLines(lines);

        return cellValue[a];
      }
    }
    return null;
  };

  useEffect(() => {
    cellValue[12] = "B";
  }, []);

  useEffect(() => {
    calculateWinner(cellValue, lines);
  }, [calculateWinner(cellValue, lines)]);

  const handleClick = (i) => {
    setClicked(!clicked);
    cellValue[id] === "B" ? (cellValue[id] = null) : (cellValue[id] = "B");
  };

  return (
    <div
      className={`tableCell ${id == 12 && "tableCell__bingo"} ${
        clicked && "tableCell__clicked"
      }`}
      onClick={handleClick}
    >
      <span>{id}</span> {data}
    </div>
  );
}

export default TableCell;
