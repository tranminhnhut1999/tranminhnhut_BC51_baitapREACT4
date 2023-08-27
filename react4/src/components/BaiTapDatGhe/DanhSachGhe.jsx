import React, { Component } from "react";
import Ghe from "./Ghe";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  rendercontent = () => {
    return this.props.danhSachGhe.map((element) => {
      return <Ghe key={element.hang} element={element} />;
    });
  };
  render() {
    return (
      <div className="seatStructure txt-center" style={{ overflowX: "auto" }}>
        <p id="notification" />
        {this.rendercontent()}
        {/* <Ghe /> */}
        <div className="screen">
          <h2 className="wthree">Screen this way</h2>
        </div>
        {/* <button onclick="updateTextArea()">Confirm Selection</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.DatGheReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps)(DanhSachGhe);
