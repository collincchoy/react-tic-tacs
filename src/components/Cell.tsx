import React from "react";

interface CellProps {
  row: number;
  col: number;
  value: string;
  onClick: VoidFunction;
}

export const Cell = (props: CellProps) => {
  const { value } = props;

  return (
    <div className="Cell" {...props} >
      {value}
    </div>
  )
}
