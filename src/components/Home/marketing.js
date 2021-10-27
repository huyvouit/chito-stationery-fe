import React from "react";
import "../../style/Home/marketing.css";

import washiTape from "../../assets/Images/washi_tape.jpg";
import { Link } from "react-router-dom";

export const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing-title">
        <h2 className="marketing-title-name">shop all stationery</h2>
      </div>
      <div className="marketing-cards">
        <Link to="/shop?type=washi%20tape" className="marketing-child-card">
          <div className="marketing-img">
            <img src={washiTape} alt="washi-tape" />
          </div>
          <div className="marketing-script">
            <p>fdfdf</p>
          </div>
        </Link>
        <Link to="/shop?type=sticker" className="marketing-child-card">
          <div className="marketing-img">
            <img src={washiTape} alt="washi-tape" />
          </div>
          <div className="marketing-script">
            <p>fdfdf</p>
          </div>
        </Link>
        <Link to="/shop?type=sticky%20note" className="marketing-child-card">
          <div className="marketing-img">
            <img src={washiTape} alt="washi-tape" />
          </div>
          <div className="marketing-script">
            <p>fdfdf</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

/* <Row className="marketing-content justify-content-xl-center text-center">
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <img
                className="marketing-image mx-5"
                src={washiTape}
                alt="washi tape"
              />
            </Row>
            <Row>
              <p className="marketing-subTitle">washi tape</p>
            </Row>
          </Col>
        </Row> */
