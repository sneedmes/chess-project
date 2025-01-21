import React from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell
    selected: boolean;
    click: (cell: Cell)=>void
}

export const CellComponent = ({cell, selected, click}: CellProps) => {
    return (
        <div
            className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
            onClick={()=>click(cell)}
            style={{background: cell.available && cell.figure ? "lightpink" : ""}}
        >
            {cell.available && !cell.figure && <div className={"available"}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};
