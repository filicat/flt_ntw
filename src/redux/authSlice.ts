import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthInfo, initAuthInfo } from '../types';


const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthInfo,
  reducers: {
    login: (state, action: PayloadAction<AuthInfo>) => {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;