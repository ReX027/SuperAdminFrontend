import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:4000";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      return data.user;
    } catch (error) {
      console.log(error, "login error");
      // return custom error message from API if any
      if (error.response && error.res) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      // Handle logout errors (optional)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
