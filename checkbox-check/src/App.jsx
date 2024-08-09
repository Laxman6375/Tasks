import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialCheckBoxList = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

function App() {
  const [checkBoxList, setCheckBoxList] = useState(initialCheckBoxList);

  const handleCheckboxChange = (rowIndex, colIndex, e) => {
    console.log(rowIndex, colIndex);
    const newChecked = checkBoxList.map((row, rIdx) =>
      row.map((col, cIdx) =>
        rowIndex === rIdx && colIndex === cIdx ? e.target.checked : col
      )
    );
    // console.log(newChecked);

    if (rowIndex === 0 && colIndex === 0) {
      const newState = newChecked[0][0];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          newChecked[i][j] = newState;
        }
      }
    } else if (colIndex === 0) {
      const newState = newChecked[rowIndex][0];
      for (let i = 0; i < 4; i++) {
        newChecked[rowIndex][i] = newState;
      }
    } else if (rowIndex === 0) {
      const newState = newChecked[0][colIndex];
      for (let i = 0; i < 4; i++) {
        newChecked[i][colIndex] = newState;
      }
    }

    setCheckBoxList(newChecked);
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
    </div>
  );
}

export default App;
