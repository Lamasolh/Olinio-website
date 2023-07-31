import React from "react";
import classes from "./HomeImage.module.css";
import background from "../../../assets/main-image.png";

const HomeImage = (props) => {
  return (
    <section className={classes.login_page}>
      <div className={classes.images_container}>
        <img src={background} alt='background' width='100%' style={{ marginTop: 70 }} />
      </div>
      {props.children}
    </section>
  );
};

export default HomeImage;
