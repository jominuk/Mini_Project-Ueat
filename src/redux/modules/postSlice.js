import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { instance } from "../../instance/instance";
import setToken from "../../Pattern/setToken";
import { getCookie } from "../../shared/cookie";

export const __getPostBox = createAsyncThunk(
  "GET_POST",
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

export const __createPost = createAsyncThunk(
  "CREATE_POST",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      const { data } = await instance.post("/posts", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시물 하나만 받아오기
export const __createGet = createAsyncThunk(
  "CREATE_GET",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//삭제
export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      await instance.delete(`/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 수정
export const __editPost = createAsyncThunk(
  "EDIT_POST",
  async ({ postId, title, content, categoryId }, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      const edited = await instance.patch(`/posts/${postId}`, {
        title,
        content,
        categoryId,
      });
      return thunkAPI.fulfillWithValue({ title, content });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//like
export const __likeHeart = createAsyncThunk(
  "LIKE_HEART",
  async (payload, thunkAPI) => {
    try {
      const accessToken = getCookie("token");
      setToken(accessToken);
      const { data } = await instance.post(`/like/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  postList: [],
  post: {},
  isLoading: false,
  like: false,
};
const postSlice = createSlice({
  name: "POST_SLICE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //
      .addCase(__getPostBox.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPostBox.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postList = action.payload.posts;
      })
      .addCase(__getPostBox.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__createPost.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__createPost.rejected, (state) => {
        state.isLoading = true;
      })

      //get?
      .addCase(__createGet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__createGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(__createGet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //삭제
      .addCase(__deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deletePost.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(__deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // 게시물 수정
      .addCase(__editPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = {
          ...state.post,
          title: action.payload.title,
          content: action.payload.content,
        };
      })
      .addCase(__editPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // like
      .addCase(__likeHeart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__likeHeart.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload === "등록 완료") {
          state.post.isLiked = true;
          state.post.likesNum = state.post.likesNum + 1;
        } else {
          state.post.isLiked = false;
          state.post.likesNum = state.post.likesNum - 1;
        }
      })
      .addCase(__likeHeart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { data } = postSlice.actions;
export default postSlice.reducer;
