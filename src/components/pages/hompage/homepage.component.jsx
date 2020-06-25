import React from "react";
import "./homepage.style.scss";
import Directory from "../../directory/directory.component";

const HomePage = ({ match }) => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
