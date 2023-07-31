import React, { useEffect, useState } from 'react';
import classes from './Signup.module.css';
import HomeImage from '../UI/HomeImage/HomeImage';
import SignupInfo from './SignupInfo';
import * as SignUpActionCreator from '../../store/actionsCreators/SignUpActionCreator';
import { connect } from 'react-redux';

function Signup({ getSignUpinfo, ResetAllDataSignUp, addSignUp, first_Name, last_Name, username, email, password, phone_Number, country }) {
  return (
    <form className={classes.login_form}>
      <div>
        <SignupInfo
          addSignUp={addSignUp}
          getSignUpinfo={getSignUpinfo}
          first_Name={first_Name} last_Name={last_Name}
          username={username} email={email} password={password} phone_Number={phone_Number}
          country={country} ResetAllDataSignUp={ResetAllDataSignUp}
        />
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    first_Name: state.SignUpR.first_Name,
    last_Name: state.SignUpR.last_Name,
    username: state.SignUpR.username,
    email: state.SignUpR.email,
    password: state.SignUpR.password,
    phone_Number: state.SignUpR.phone_Number,
    country: state.SignUpR.country,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSignUpinfo: (name, value) =>
      dispatch(SignUpActionCreator.getSignUpinfo(name, value)),
    ResetAllDataSignUp: (name, value) =>
      dispatch(SignUpActionCreator.ResetAllDataSignUp(name, value)),
    addSignUp: (
      first_Name, last_Name, username, email, password, phone_Number, country
    ) =>
      dispatch(
        SignUpActionCreator.addSignUp(
          first_Name, last_Name, username, email, password, phone_Number, country
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
