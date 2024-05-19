import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosInstance';
import { saveUser } from '../../../hooks/useStorage';
import { customError } from '../../../utils/customError';
import { toastifyFunc } from '../../../lib/toastifyLoaders';
import mockUserData from '../../../utils/mockData'



const mockLoginUser = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000))
  return{data: mockUserData}
}
export const loginUser = createAsyncThunk('login', async (data, { rejectWithValue }) => {
  toastifyFunc('dismiss');
  try {
    toastifyFunc('pending', 'Logging in...');
    const response = await mockLoginUser(data);
    saveUser(response.data);
    toastifyFunc('dismiss');
    return response.data;
  } catch (error) {
    toastifyFunc('rejected', customError(error).message);
    return rejectWithValue(customError(error));
  }
});







const initialState = {
  status: 'idle',
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetLogin: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetLogin } = loginSlice.actions;
export default loginSlice.reducer;
