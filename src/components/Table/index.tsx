import React from "react";
import { TableProps } from "./types";

const Table = <T extends {}>({ data, columns }: TableProps<T>) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor as string}
              className="border border-gray-300 p-2 text-left"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              const cellValue = row[col.accessor];

              // Aqui aseguramos que el valor sea compatible con ReactNode
              const renderValue = col.render
                ? col.render(cellValue)
                : String(cellValue);

              return (
                <td
                  key={col.accessor as string}
                  className="border border-gray-300 p-2"
                >
                  {renderValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
