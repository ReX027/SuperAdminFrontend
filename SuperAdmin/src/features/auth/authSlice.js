import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout } from "./authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    clearAuthentication(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state) => {
        // Set loading state to indicate logout in progress (optional)
        state.loading = true;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        // Clear error state (optional)
        state.error = null;
      })
      .addCase(userLogout.rejected, (state, action) => {
        // Handle logout errors (optional)
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {
  clearError,

  clearAuthentication,
} = authSlice.actions;
export default authSlice.reducer;
