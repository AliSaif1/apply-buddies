import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: JSON.parse(localStorage.getItem('adminData')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem('adminData', JSON.stringify(action.payload));
    },
    logoutAdmin: (state) => {
      state.admin = null;
      localStorage.removeItem('adminData');
    },
  },
});

export const { setAdmin, logoutAdmin } = authSlice.actions;
export default authSlice.reducer;