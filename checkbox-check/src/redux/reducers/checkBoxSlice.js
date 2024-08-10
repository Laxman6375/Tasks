import { createSlice } from "@reduxjs/toolkit";

// Function to generate the initial state
const generateInitialCheckBoxList = (rows, cols) => {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
};

const initialState = {
  checkBoxList: generateInitialCheckBoxList(4, 4),
};

const checkBoxSlice = createSlice({
  name: "checkBox",
  initialState,
  reducers: {
    toggleCheckBox: (state, action) => {
      const { rowIndex, colIndex, checked } = action.payload;
      state.checkBoxList[rowIndex][colIndex] = checked;

      if (rowIndex === 0 && colIndex === 0) {
        const newState = state.checkBoxList[0][0];
        for (let i = 0; i < state.checkBoxList.length; i++) {
          for (let j = 0; j < state.checkBoxList[i].length; j++) {
            state.checkBoxList[i][j] = newState;
          }
        }
      } else if (colIndex === 0) {
        const newState = state.checkBoxList[rowIndex][0];
        for (let i = 0; i < state.checkBoxList[rowIndex].length; i++) {
          state.checkBoxList[rowIndex][i] = newState;
        }
      } else if (rowIndex === 0) {
        const newState = state.checkBoxList[0][colIndex];
        for (let i = 0; i < state.checkBoxList.length; i++) {
          state.checkBoxList[i][colIndex] = newState;
        }
      }

      const allRowsChecked = (row) =>
        row.slice(1).every((checked) => checked === true);

      const allColsChecked = (colIndex) =>
        state.checkBoxList.slice(1).every((row) => row[colIndex] === true);

      for (let i = 1; i < state.checkBoxList.length; i++) {
        state.checkBoxList[i][0] = allRowsChecked(state.checkBoxList[i]);
      }

      for (let j = 1; j < state.checkBoxList[0].length; j++) {
        state.checkBoxList[0][j] = allColsChecked(j);
      }

      const allChecked =
        state.checkBoxList
          .slice(1)
          .every((row) => row.slice(1).every(Boolean)) &&
        state.checkBoxList[0].slice(1).every(Boolean);

      state.checkBoxList[0][0] = allChecked;
    },
    addRow: (state) => {
      state.checkBoxList.push(Array(state.checkBoxList[0].length).fill(false));

      state.checkBoxList[0] = state.checkBoxList[0].map(() => false);
    },
    addColumn: (state) => {
      state.checkBoxList = state.checkBoxList.map((row) => [...row, false]);

      for (let i = 0; i < state.checkBoxList.length; i++) {
        state.checkBoxList[i][0] = false;
      }
    },
  },
});

export const { toggleCheckBox, addRow, addColumn } = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
