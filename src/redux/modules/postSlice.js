import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instance/instance";

export const __getPost = createAsyncThunk(
  "GET_POST",
  async ({ categoryId }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts?${categoryId}&page`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createPost = createAsyncThunk(
  "CREATE_POST",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await instance.post("/auth/register/check-id", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  postList: [],
  post: {},
  isLoading: false,
};

const postSlice = createSlice({
  name: "POST_SLICE",
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
      })
      .addCase(__createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(__createPost.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default postSlice.reducer;
