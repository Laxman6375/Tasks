import { useState } from "react";

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

    if (rowIndex === 0 && colIndex === 0) {
      const newState = newChecked[0][0];
      for (let i = 0; i < newChecked.length; i++) {
        for (let j = 0; j < newChecked.length; j++) {
          newChecked[i][j] = newState;
        }
      }
    } else if (colIndex === 0) {
      const newState = newChecked[rowIndex][0];
      for (let i = 0; i < newChecked.length; i++) {
        newChecked[rowIndex][i] = newState;
      }
    } else if (rowIndex === 0) {
      const newState = newChecked[0][colIndex];
      for (let i = 0; i < newChecked.length; i++) {
        newChecked[i][colIndex] = newState;
      }
    }

    const allFirstColumnChecked = [1, 2, 3].every((i) => newChecked[i][1]);
    const allSecondColumnChecked = [1, 2, 3].every((i) => newChecked[i][2]);
    const allThirdColumnChecked = [1, 2, 3].every((i) => newChecked[i][3]);

    // console.log(newChecked);

    const allFirstRowChecked = [1, 2, 3].every((i) => newChecked[1][i]);
    const allSecondRowChecked = [1, 2, 3].every((i) => newChecked[2][i]);
    const allThirdRowChecked = [1, 2, 3].every((i) => newChecked[3][i]);

    newChecked[0][1] = allFirstColumnChecked;
    newChecked[0][2] = allSecondColumnChecked;
    newChecked[0][3] = allThirdColumnChecked;

    newChecked[1][0] = allFirstRowChecked;
    newChecked[2][0] = allSecondRowChecked;
    newChecked[3][0] = allThirdRowChecked;

    if (
      allFirstColumnChecked &&
      allSecondColumnChecked &&
      allThirdColumnChecked &&
      allFirstRowChecked &&
      allSecondRowChecked &&
      allThirdRowChecked
    ) {
      newChecked[0][0] = true;
      console.log(newChecked[0][0]);
    } else {
      newChecked[0][0] = false;
      console.log(newChecked[0][0]);
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
