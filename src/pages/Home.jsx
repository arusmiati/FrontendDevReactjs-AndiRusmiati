import React, { Fragment } from "react";
import Header from "../components/Header";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <Fragment>
      <Header />
      <Restaurant /> 
      <Footer />
    </Fragment>
  );
};

export default Home;
