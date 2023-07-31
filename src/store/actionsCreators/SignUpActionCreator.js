import * as actionTypes from '../actions/actions';
import axios from 'axios';
import { constants } from './Constants';

export const getSignUpinfo = (name, value) => {
  return {
    type: actionTypes.SignUpAction.GET_INFO_SIGNUP,
    name: name,
    value: value,
  };
};

export const ResetAllDataSignUp = (name, value) => {
  return {
    type: actionTypes.SignUpAction.RESET_ALL_DATA_SIGNUP,
    name: name,
    value: value,
  };
};

export const addSignUp = async (SignUpData) => {
  try {
    const response = await axios.post(constants + 'register', SignUpData);
    return response.data;
  } catch (error) {
    throw new Error('Error sending data: ' + error.message);

  }
};

