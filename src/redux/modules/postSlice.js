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

// //get??
// export const __createGet = createAsyncThunk(
//   "CREATE_GET",
//   async ( payload, thunkAPI) => {
//     try {
//       const {data} = await instance.post("/auth/register/check-id")
//       return thunkAPI.fulfillWithValue(data)
//     }catch ( error ) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// //삭제
// export const __deletePost = createAsyncThunk(
//   "DELETE_POST",
//   async(payload , thunkAPI) => {
//     try {
//       await instance.delete(`post/${payload}`)
//       return thunkAPI.fulfillWithValue(payload)
//     }catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

//수정
// export const __editPost = createAsyncThunk(
//   "EDIT_POST",
//   async (payload, thunkAPI) => {
//     try {
//       const edited = await axios.patch(`post/${payload.id}`, {
//         title: payload.title,
//         content: payload.content,
//       });
//       return thunkAPI.fulfillWithValue(edited.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
        state.post = [...state.post, action.payload];
      })
      .addCase(__createPost.rejected, (state) => {
        state.isLoading = true;
      });

    // //get?
    // .addCase(__createGet.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(__createGet.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.post = action.payload;
    // })
    // .addCase(__createGet.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });

    // //삭제
    // .addCase(__deletePost.pending, (state) => {
    //   state.isLoading = true
    // })
    // .addCase(__deletePost.fulfilled, (state) => {
    //   state.isLoading = false
    //   state.post = state.post.filter((post) => post.id !== action.payload)
    // })
    // .addCase(__deletePost.rejected, (state) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // })

    // // 게시물 수정
    // .addCase(__editPost.pending, (state) => {
    //   state.isLoading = true
    // })
    // .addCase(__editPost.fulfilled, (state,action) =>{
    //   state.isLoading = false
    //   state.post = state.post.map((user) =>
    //   user.id === action.payload.id ? action.payload : user
    //   )
    // })
    // .addCase(__editPost.rejected, (state,action) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // })
  },
});

export default postSlice.reducer;
