import * as actionTypes from '../actions/actions';
import axios from 'axios';
import { constants } from './Constants';

export const getlogininfo = (name, value) => {
  return {
    type: actionTypes.LoginAction.GET_INFO_LOGIN,
    name: name,
    value: value,
  };
};

export const ResetAllDataLogin = (name, value) => {
  return {
    type: actionTypes.LoginAction.RESET_ALL_DATA_LOGIN,
    name: name,
    value: value,
  };
};

export const loginSubmit = async (formData) => {
  try {
    const response = await axios.post(constants + 'login', formData);
    return response.data;
  } catch (error) {
    throw new Error('Error sending data: ' + error.message);
  }
};

