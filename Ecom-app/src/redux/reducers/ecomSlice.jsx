import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  filterData: [],
  isError: false,
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (error) {
    console.log(error);
  }
});

const ecomSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.filterData = action.payload;
      // console.log(state.filterData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      //  console.log(action.payload);
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { addProduct } = ecomSlice.actions;
export const products = (state) => state.filterData;

export default ecomSlice.reducer;
