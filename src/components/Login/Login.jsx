import React, { useEffect, useState } from 'react';
import classes from './Login.module.css';
import { loginSubmit } from '../../store/actionsCreators/LoginActionCreator'
import InputRegistration from '../UI/InputRegistration/InputRegistration';
import ButtonRegistration from '../UI/Buttons/ButtonRegistration';
import HomeImage from '../UI/HomeImage/HomeImage';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as LoginActionCreators from '../../store/actionsCreators/LoginActionCreator';
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logodark.svg'
export const ThemeContext = React.createContext("null");
import ReactSwitch from "react-switch";

const Login = ({ ResetAllDataLogin, getlogininfo, email, password }) => {
  const navigate = useNavigate();

  useEffect(() => {
    ResetAllDataLogin('email', '');
    ResetAllDataLogin('password', '');;
    ResetAllDataLogin('error', '');
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginSubmit(formData);
      if (response.Status == "Success") {
        navigate('/table');
      }
      if (response.Error == "Email Not found") {
        alert('Email Not found')
      }
      if (response.Error == "Password not matched") {
        alert('Password not matched')
      }

    } catch (error) {
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    getlogininfo(e.target.name, e.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={classes.app} id={theme}>
        <HomeImage>
          <form className={classes.login_form} onSubmit={loginHandler}>
            <div className="switch" style={{ justifyContent: 'right', textAlign: 'right', padding: 20 }}>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div style={{ marginTop: 20 }}>
              {theme === "light" ? <img src={logo} width='35%' height='8%' /> : <></>}
              {theme === "dark" ? <img src={logo1} width='35%' height='8%' /> : <></>}
              <InputRegistration
                label='Email'
                name='email'
                defaultValue={email}
                onChange={handleChange}
                input={{
                  type: 'email',
                  placeholder: 'Lama Solh',
                }}
              />
              <InputRegistration
                label='Password'
                name='password'
                defaultValue={password}
                onChange={handleChange}
                input={{
                  type: 'password',
                  placeholder: 'Lama123@',
                }}
              />
              <ButtonRegistration
                className={classes.button}
                type='submit'
                name='submit'
                onClick={loginHandler}
              >
                Sign in
              </ButtonRegistration>
              <p className={classes.hr}>or</p>
              <p className={classes.signup}>
                Do not have an account? <a href='/signup'>Sign Up</a>
              </p>
            </div>
          </form>
        </HomeImage>
      </div>
    </ThemeContext.Provider>
  );
};
const mapStateToProps = state => {
  return {
    email: state.LoginR.email,
    password: state.LoginR.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getlogininfo: (name, value) =>
      dispatch(LoginActionCreators.getlogininfo(name, value)),
    ResetAllDataLogin: (name, value) =>
      dispatch(LoginActionCreators.ResetAllDataLogin(name, value)),
    loginnSubmit: (formData) =>
      dispatch(LoginActionCreators.loginSubmit(formData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
