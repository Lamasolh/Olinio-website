import React, { useState } from "react";
import ButtonRegistration from "../../components/UI/Buttons/ButtonRegistration";
import './home.css';
import { Grid } from '@material-ui/core';
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logodark.svg'
export const ThemeContext = React.createContext("null");
import ReactSwitch from "react-switch";

const Home = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Grid container spacing={2} style={{ justifyContent: 'center', textAlign: 'center', paddingTop: 100 }}>
          <Grid item sm={12} md={12} style={{ justifyContent: 'center', textAlign: 'center', }}>
            {theme === "light" ? <img src={logo} width="40%" /> : <></>}
            {theme === "dark" ? <img src={logo1} width="40%" /> : <></>}
          </Grid>
          <Grid item sm={12} md={6} style={{ justifyContent: 'center', textAlign: 'center' }}>
            <a href="/login" target="_blank" style={{ textDecoration: 'none', color: 'white' }}> <ButtonRegistration
              className="button"
              type='submit'
              name='submit'
            >
              Login
            </ButtonRegistration>
            </a>
          </Grid>
          <Grid item sm={12} md={6} style={{ justifyContent: 'center', textAlign: 'center' }}>
            <a href="/SignUp" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>  <ButtonRegistration
              className="button"
              type='submit'
              name='submit'
            >
              Register
            </ButtonRegistration>
            </a>
          </Grid>
          <div className="switch" >
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </Grid>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;