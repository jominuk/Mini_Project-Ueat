import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instance/instance";

const initialState = {
  postList: [],
  isLoading: false,
  like: false,
};

export const __getPost = createAsyncThunk(
  "GET_SLICE/GET_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/posts?categoryId=${payload}&page=1`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const contentsSlice = createSlice({
  name: "GET_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postList = action.payload.posts;
      })
      .addCase(__getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { data } = contentsSlice.actions;
export default contentsSlice.reducer;
