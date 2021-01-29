import React, { useEffect, useState } from "react";
import "./Game.css";
import Table from "../Table/Table";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";

function Game() {
  const [{ wins }, dispatch] = useDataLayerValue();
  const [selecteNumbers, setSelectedNumbers] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    if (wins.length) {
      setSelectedNumbers(wins[wins.length - 1]);
    }
  }, [wins]);

  return (
    <div className="game">
      <div className="game__selectedNumbers_container">
        <p>
          Your Last <br /> <span>5 Winning</span> <br /> Numbers
        </p>

        <div className="game__numbers">
          {selecteNumbers?.map((number, index) => (
            <div
              key={index}
              className={`game__selectedNumbers ${
                number !== null && "game__selectedNumbers_full"
              }`}
            >
              {number && number}
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <Table />
    </div>
  );
}

export default Game;
