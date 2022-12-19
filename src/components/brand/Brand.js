import React from "react";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="img_design section__padding">
    <div className="images">
        <img src={google} alt="" />
    </div>
    <div className="images">
        <img src={slack} alt="" />
    </div>
    <div className="images">
        <img src={atlassian} alt="" />
    </div>
    <div className="images">
        <img src={dropbox} alt="" />
    </div>
    <div className="images">
        <img src={shopify} alt="" />
    </div>
    </div>
  );
};

export default Brand;
