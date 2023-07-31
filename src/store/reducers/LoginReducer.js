import * as actionTypes from '../actions/actions';

const initialState = {
  email: '',
  password: '',
};

const LoginR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoginAction.GET_INFO_LOGIN:
      return { ...state, [action.name]: action.value };

    case actionTypes.LoginAction.RESET_ALL_DATA_LOGIN:
      return { ...state, [action.name]: action.value };

    default:
      return state;
  }
};
export default LoginR;
