import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {useIsFocused} from '@react-navigation/native';
import {updateToken} from '@redux/userReducer/reducer';
import {Log} from '@utility/log';
import React, {useEffect} from 'react';

const useMarketPlace = () => {
  //** active slide show current */
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const {token} = useAppSelector(state => state.UserData);
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      refreshToken();
    }
  }, [isFocused]);
  /** API for refresh access token */
  const refreshToken = async () => {
    try {
      const {data, headers} = await axiosInstance.get(constant.refreshToken, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedToken = headers?.['set-cookie']
        ?.find(cookie => cookie?.includes('accessToken'))
        ?.split(';')[0]
        .split('=')[1];
      Log('refresh token success:', data);
      dispatch(updateToken(updatedToken));
    } catch (error) {
      Log('refresh token failed:', error);
    }
  };
  return {
    activeIndex,
    setActiveIndex,
  };
};

export default useMarketPlace;
