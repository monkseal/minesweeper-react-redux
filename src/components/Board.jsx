import React from "react";
import Row from "./Row";

const Board = ({ table }) => (
  <table className="Table" >
    <tbody>
      {table.map((cells, i) => (
        <Row cells={cells} key={`mine-row-${i}`} />
      ))}
    </tbody>
  </table>
);

export default Board;
