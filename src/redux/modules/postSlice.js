import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addPosts = createAsyncThunk(
  "ADD_POST",
  async (payload, thunkAPI) => {
    try {
      await axios.post("", payload, {
        url: "",
        method: "POST",
        headers: {
          authorization: "token",
        },
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPosts = createAsyncThunk(
  "GET_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // //add
    // [__addPosts.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__addPosts.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.posts = [...state.posts, action.payload];
    // },
    // [__addPosts.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // //get
    // [__getPosts.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getPosts.fulfilled]: (state) => {
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__getPosts.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default postSlice.reducer;
