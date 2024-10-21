import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';
import {ReducerState, SignUpFieldsProps} from './interface';

const initialState: ReducerState = {
  step: 0,
  fields: {
    email: '',
    otp: '',
    firstName: '',
    lastName: '',
    password: '',
    dateOfBirth: '',
    privacyPolicy: false,
    accountType: '',
    qualification: '',
    experience: '',
    location: '',
    tiktok: '',
    instagram: '',
    youtube: '',
    about: '',
  },
  userData: {
    fName: '',
    lName: '',
    education: '',
    location: '',
    experience: '',
    about: '',
    instagram: '',
    tikTok: '',
  },
  typeUser: undefined,
  isLogin: false,
  token: undefined,
  refreshToken: undefined,
};

export const clearAction = createAction('clear');
const UserData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{key: keyof SignUpFieldsProps; value: string}>,
    ) => {
      const {key, value} = action.payload;
      if (key && value) {
        if (!state.fields) state.fields = {} as SignUpFieldsProps;
        state.fields[key] = value;
      }
    },
    incrementStep: (state, action) => {
      return {
        ...state,
        step: action?.payload,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.accessToken,
        refreshToken: action.payload?.refreshToken,
        userData: action.payload,
        isLogin: true,
        typeUser: action.payload?.typeUser,
      };
    },
    updateToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    signUpSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.accessToken,
        userData: action.payload,
        isLogin: true,
        typeUser: action.payload?.typeUser,
        refreshToken: action.payload?.refreshToken,
      };
    },
    logoutSucces: state => {
      return {
        ...state,
        step: 0,
        fields: undefined,
        userData: undefined,
        typeUser: undefined,
        isLogin: false,
        token: undefined,
      };
    },
    fieldsClearSuccess: state => {
      return {
        ...state,
        fields: undefined,
        step: 0,
      };
    },
    getUserDetails: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
  },
});

export const {
  setField,
  incrementStep,
  loginSuccess,
  getUserDetails,
  logoutSucces,
  signUpSuccess,
  fieldsClearSuccess,
  updateToken,
} = UserData.actions;

export default UserData.reducer;
