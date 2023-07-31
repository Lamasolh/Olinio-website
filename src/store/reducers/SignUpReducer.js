import * as actionTypes from '../actions/actions';


const initialState = {
    first_Name: '',
    last_Name: '',
    username: '',
    email: '',
    password: '',
    phone_Number: '',
    country: '',
}

const SignUpR = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SignUpAction.GET_INFO_SIGNUP:
            return { ...state, [action.name]: action.value }

        case actionTypes.SignUpAction.RESET_ALL_DATA_SIGNUP:
            return { ...state, [action.name]: action.value }

        default:
            return state;
    }
}
export default SignUpR;