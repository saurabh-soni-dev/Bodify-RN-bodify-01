import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../api';
import constant from '../../config/constant';
import {getUserDetails} from './reducer';

/**
 * users = your reducer name
 * fetchUserProfile action and function name
 */

const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (token: string | undefined, thunkAPI) => {
    try {
      const response = await axiosInstance.get(constant.baseURL, {
        headers: {
          auth: token,
        },
      }); // Replace with your API endpoint
      if (response.data.status == 200) {
        thunkAPI.dispatch(getUserDetails(response?.data?.data));
        return response.data.data;
      }
    } catch (error: any) {
      {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  },
);

export {fetchUserProfile};
