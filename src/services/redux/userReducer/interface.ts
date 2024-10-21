export interface ReducerState {
  userData: loginPayload | undefined;
  typeUser: string | undefined;
  isLogin: boolean;
  token: string | undefined;
  refreshToken: string | undefined;
  step: number;
  fields: SignUpFieldsProps | undefined;
}

export interface loginPayload {
  fName: string;
  lName: string;
  education: string;
  location: string;
  experience: string;
  about: string;
  instagram: string;
  tikTok: string;
}

export interface SignUpFieldsProps {
  email: string;
  otp: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  privacyPolicy: string | boolean;
  accountType: string;
  qualification: string;
  experience: string;
  location: string;
  tiktok: string;
  instagram: string;
  youtube: string;
  about: string;
}
