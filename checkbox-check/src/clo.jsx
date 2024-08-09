import { useState } from "react";
import "./App.css";

// Function to generate the initial state
const generateInitialCheckBoxList = (rows, cols) => {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
};

function App() {
  const [checkBoxList, setCheckBoxList] = useState(
    generateInitialCheckBoxList(4, 4)
  );

  const handleCheckboxChange = (rowIndex, colIndex, e) => {
    const newChecked = checkBoxList.map((row, rIdx) =>
      row.map((col, cIdx) =>
        rowIndex === rIdx && colIndex === cIdx ? e.target.checked : col
      )
    );

    if (rowIndex === 0 && colIndex === 0) {
      const newState = newChecked[0][0];
      for (let i = 0; i < newChecked.length; i++) {
        for (let j = 0; j < newChecked[i].length; j++) {
          newChecked[i][j] = newState;
        }
      }
    } else if (colIndex === 0) {
      const newState = newChecked[rowIndex][0];
      for (let i = 0; i < newChecked[rowIndex].length; i++) {
        newChecked[rowIndex][i] = newState;
      }
    } else if (rowIndex === 0) {
      const newState = newChecked[0][colIndex];
      for (let i = 0; i < newChecked.length; i++) {
        newChecked[i][colIndex] = newState;
      }
    }

    const allRowsChecked = (row) =>
      row.slice(1).every((checked) => checked === true);
    const allColsChecked = (colIndex) =>
      newChecked.slice(1).every((row) => row[colIndex] === true);

    for (let i = 1; i < newChecked.length; i++) {
      newChecked[i][0] = allRowsChecked(newChecked[i]);
    }
    for (let j = 1; j < newChecked[0].length; j++) {
      newChecked[0][j] = allColsChecked(j);
    }

    const allChecked =
      newChecked.slice(1).every((row) => row.slice(1).every(Boolean)) &&
      newChecked[0].slice(1).every(Boolean);

    newChecked[0][0] = allChecked;

    setCheckBoxList(newChecked);
  };

  const addRow = () => {
    setCheckBoxList((prev) => [...prev, Array(prev[0].length).fill(false)]);
  };

  const addColumn = () => {
    setCheckBoxList((prev) => prev.map((row) => [...row, false]));
  };

  return (
    <div className="flex flex-col gap-10 mt-10 justify-evenly">
      {checkBoxList.map((row, rowIndex) => (
        <div className="flex justify-evenly items-center gap-5" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div className="flex" key={colIndex}>
              <input
                type="checkbox"
                className="w-6 h-6 border-2 border-gray-300 rounded-full cursor-pointer"
                id={`checkbox-${rowIndex}-${colIndex}`}
                checked={col}
                onChange={(e) => handleCheckboxChange(rowIndex, colIndex, e)}
              />
            </div>
          ))}
        </div>
      ))}
      <div className="flex gap-4">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Row
        </button>
        <button
          onClick={addColumn}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Column
        </button>
      </div>
    </div>
  );
}

export default App;
