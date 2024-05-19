import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../lib/axiosInstance";
import { customError } from "../../../utils/customError";
import { getUser } from "../../../hooks/useStorage";
import { setRef } from "@mui/material";
import { mockSubjectData } from "../../../utils/mockSubejctData";



const mockFetchSubjectRequest = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

return mockSubjectData;
}

export const fetchSubjects = createAsyncThunk(
  "getcourses",
  async(_, {rejectedWithValue}) => {
    try{
      // const {token, _id, _class} = getUser()

      const response = await mockFetchSubjectRequest()

      return response;
    }catch (error) {
      return rejectedWithValue(customError(error))
    }
  }
)





const initialState = {
    status: 'idle',
    data: null,
    error: null,
  };

  const getSubjectSlice = createSlice({
    name: 'getcourses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSubjects.pending, (state) => {
          state.status = 'pending';
        })
        .addCase(fetchSubjects.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          state.data = action.payload;
        })
        .addCase(fetchSubjects.rejected, (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        });
    },
  });
  
  export default getSubjectSlice.reducer;


