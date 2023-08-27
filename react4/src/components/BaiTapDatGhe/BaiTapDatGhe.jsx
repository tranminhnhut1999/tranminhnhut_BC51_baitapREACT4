import React, { Component } from "react";
import "./style.css";
import ChiTietGhe from "./ChiTietGhe";
import DanhSachGhe from "./DanhSachGhe";

export default class BaiTapDatGhe extends Component {
  render() {
    return (
      <div>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            {/* thông tin user và số ghế */}
            {/* <div className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>
                  </label>
                  <input type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input type="number" id="Numseats" required min={1} />
                </div>
              </div>
              <button onclick="takeData()">Start Selecting</button>
            </div> */}
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            <DanhSachGhe />
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            {/* //seat layout */}
            {/* details after booking displayed here */}
            {/* //details after booking displayed here */}
            <ChiTietGhe />
          </div>
        </div>
      </div>
    );
  }
}
