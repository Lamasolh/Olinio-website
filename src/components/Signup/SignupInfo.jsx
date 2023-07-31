import React, { useEffect, useState } from "react";
import InputRegistration from "../UI/InputRegistration/InputRegistration";
import countrydata from '../../../dropdown_Test.json'
import ButtonRegistration from '../UI/Buttons/ButtonRegistration';
import classes from './Signup.module.css';
import background from "../../assets/main-image.png";
import { useNavigate } from "react-router-dom";
import { addSignUp } from "../../store/actionsCreators/SignUpActionCreator";
import { Grid } from "@mui/material";
export const ThemeContext = React.createContext("null");
import ReactSwitch from "react-switch";

const SignupInfo = ({ getSignUpinfo, ResetAllDataSignUp, country }) => {

  const navigate = useNavigate();

  const [password, setPassword] = useState("Abc.@678");
  const [first_Name, setfirst_Name] = useState("");
  const [last_Name, setlast_Name] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const [phone_Number, setphone_Number] = useState("");


  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorEmpty, setErrorEmpty] = useState("");
  const [errorEmpty1, setErrorEmpty1] = useState("");
  const [errorEmpty2, setErrorEmpty2] = useState("");
  const [errorEmpty3, setErrorEmpty3] = useState("");
  const [errorEmpty4, setErrorEmpty4] = useState("");
  const [errorEmpty5, setErrorEmpty5] = useState("");
  const [errorEmpty6, setErrorEmpty6] = useState("");

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  useEffect(() => {
    ResetAllDataSignUp("first_Name", '')
    ResetAllDataSignUp("last_Name", '')
    ResetAllDataSignUp("username", '')
    ResetAllDataSignUp("email", '')
    ResetAllDataSignUp("password", '')
    ResetAllDataSignUp("phone_Number", '')
    ResetAllDataSignUp("country", '')
  }, []);

  const [SignUpData, setSignUpData] = useState({
    first_Name: '',
    last_Name: '',
    username: '',
    email: '',
    password: '',
    phone_Number: '',
    country: '',
    message: '',
  });

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (first_Name == "") {
      setErrorEmpty("can't be empty!");
    }
    else {
      setErrorEmpty("");
    }
    if (last_Name == "") {
      setErrorEmpty1("can't be empty!");
    }
    else {
      setErrorEmpty1("");
    }
    if (username == "") {
      setErrorEmpty2("can't be empty!");
    }
    else {
      setErrorEmpty2("");
    }
    if (email == "") {
      setErrorEmpty3("can't be empty!");
    }
    else {
      setErrorEmpty3("");
    }
    if (password == "") {
      setErrorEmpty4("can't be empty!");
    }
    else {
      setErrorEmpty4("");
    }
    if (phone_Number == "") {
      setErrorEmpty5("can't be empty!");
    }
    else {
      setErrorEmpty5("");

    }
    if (country == "") {
      setErrorEmpty6("can't be empty!");
    }
    else {
      setErrorEmpty6("");

    }
    if (first_Name !== "" && last_Name !== "" && username !== "" &&
      email !== "" && password !== "" && phone_Number !== "" && country !== "") {
      var verify = /[@gmail.com]/g;
      if (!email.match(verify)) {
        setErrorMessageEmail("Email should contains @gmail.com");
      }
      else {
        try {
          const response = await addSignUp(SignUpData);

        } catch (error) {
        }

        alert('You Are SigUp Sucessfully!');

        navigate('/login');
      };

    }
  }

  function handlePassword(e) {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    let new_pass = e.target.value;
    setPassword(new_pass);
    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var char = /[?=.*\W]/

    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 8) {
      setErrorMessage("Password length should be at least 8 characters!.");
    }
    else if (!new_pass.match(char)) {
      setErrorMessage("Should contains at least one symbol!");
    } else {
      setErrorMessage("Password is strong!");
      getSignUpinfo(e.target.name, e.target.value)
    }
  }

  const handlefirst_Name = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    setfirst_Name(e.target.value);
    getSignUpinfo(e.target.name, e.target.value)
  }

  const handlelast_Name = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    setlast_Name(e.target.value);
    getSignUpinfo(e.target.name, e.target.value)
  }

  const handlephone_Number = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    setphone_Number(e.target.value);
    getSignUpinfo(e.target.name, e.target.value)
  }

  const handleusername = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    setusername(e.target.value);
    getSignUpinfo(e.target.name, e.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
    setemail(e.target.value);
    getSignUpinfo(e.target.name, e.target.value)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="appp" id={theme}>
        <Grid container>
          <Grid item sm={12} md={6} style={{ justifyContent: 'center', textAlign: 'center', padding: 50 }}>

            <img src={background} alt='background' width='85%' style={{ marginTop: 70 }} />
          </Grid>
          <Grid item sm={12} md={6} style={{ padding: 80 }}>
            <div className="switch" style={{ float: 'right' }}>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <h2 style={{ color: '#6e4e99' }}>SignUp</h2>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='first_Name'
                defaultValue={first_Name}
                onChange={handlefirst_Name}
                label='First Name'
                input={{
                  type: "text",
                  placeholder: "Lama",
                }}
              />
              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='last_Name'
                defaultValue={last_Name}
                onChange={handlelast_Name}
                label='Last Name'
                input={{
                  type: "text",
                  placeholder: "solah",
                }}
              />
              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty1} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='username'
                value={username}
                onChange={handleusername}
                label='username'
                input={{
                  type: "text",
                  placeholder: "Lamasolh",
                }}
              />

              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty2} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                input={{
                  type: "email",
                  placeholder: "Lamasolh@gmail.com",
                }}
              />
              <div style={{ color: "red", marginTop: -20, marginBottom: 20 }}> {errorMessageEmail} </div>
              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty3} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='password'
                value={password}
                onChange={handlePassword}
                label='Password'
                input={{
                  type: "password",
                  placeholder: "Lama1@",
                }}
              />
              <div style={{ color: "red", marginTop: -10 }}> {errorMessage} </div><br />
              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty4} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <InputRegistration
                name='phone_Number'
                value={phone_Number}
                onChange={handlephone_Number}
                label='phone_Number'
                input={{
                  type: "number",
                  placeholder: "12345678",
                }}
              />
              <div style={{ color: "red", marginTop: -10 }}> {errorEmpty5} </div>
            </Grid>
            <Grid item sm={12} md={12} >
              <label className="form-label" style={{ fontWeight: 700, fontSize: 20, marginBottom: 30, color: 'rgb(110, 78, 153)' }}>
                Country*
              </label>
              <div className="text-dark" style={{ marginTop: 13, borderRadius: '12px' }}>
                <select name="country" className="form-control" style={{ borderRadius: 12, width: '107%', height: 50, border: '1.4px solid #d1d1d1' }} onChange={(e) => {
                  const { name, value } = e.target;
                  setSignUpData({ ...SignUpData, [name]: value });
                  getSignUpinfo(e.target.name, e.target.value)
                }}>
                  <option value="">--select country--</option>
                  {countrydata.map((getcountry, index) => (
                    <option value={getcountry.code} key={index}>{getcountry.name}</option>
                  ))}
                </select>
                <div style={{ color: "red", marginTop: 20 }}> {errorEmpty6} </div>
              </div>
            </Grid>
            <Grid item sm={12} md={12} >

              <ButtonRegistration
                className={classes.button}
                onClick={signUpHandler}
              >
                Register User
              </ButtonRegistration>
              <p className={classes.hr}>or</p>
              <p className={classes.signin}>
                have an account? <a href='/login' style={{ color: '#6e4e99' }}>Sign In</a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeContext.Provider>
  );
};

export default SignupInfo;
