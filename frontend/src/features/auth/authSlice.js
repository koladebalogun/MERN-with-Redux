//this file will contain the reducers and initial state for the authentication.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//getting the json web token which we saved to local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  message: ''
};

export const signup = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      return authService.signup(user);
    } catch (error) {
      const message =
        (error.data && error.response && error.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    return authService.login(user);
  } catch (error) {
    const message =
      (error.data && error.response && error.data.message) ||
      error.message ||
      error.toString();

    return thunkApi.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user')
      state.user = null
    }
  },

  extraReducers: (builder) => {
    builder
    
    // Signup
    .addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.isError = false
    })

    .addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false
      state.user = action.payload;

    })

    .addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
    })

    // Login
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })

    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.message = action.payload;
    });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
