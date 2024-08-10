import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCheckBox,
  addRow,
  addColumn,
} from "./redux/reducers/checkBoxSlice";
import "./App.css";

function App() {
  const checkBoxList = useSelector((state) => state.checkBox.checkBoxList);
  const dispatch = useDispatch();

  // console.log(checkBoxList);

  const handleCheckboxChange = (rowIndex, colIndex, e) => {
    dispatch(toggleCheckBox({ rowIndex, colIndex, checked: e.target.checked }));
  };

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={() => dispatch(addRow())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Row
        </button>
        <button
          onClick={() => dispatch(addColumn())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Column
        </button>
      </div>
      <div className="flex flex-col gap-10  justify-evenly">
        {checkBoxList.map((row, rowIndex) => (
          <div
            className="flex justify-evenly items-center gap-5"
            key={rowIndex}
          >
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
    </div>
  );
}

export default App;
