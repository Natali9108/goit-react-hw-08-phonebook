import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const isPending = action => {
  action.type.endsWith('/pending') && action.type.includes('auth');
};

const handlePending = state => {
  state.error = null;
};

const isRejected = action => {
  action.type.endsWith('/rejected') && action.type.includes('auth');
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handleFulfilleRegisterdAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogInAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handlePendingRefresh = state => {
  state.isRefreshing = true;
};

const handleFulfilledRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefresh = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleFulfilleRegisterdAuth)
      .addCase(logIn.fulfilled, handleFulfilledLogInAuth)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
