import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTietGhe extends Component {
  // rendercontent = () => {
  //   return this.props.danhSachGhe.map((elemment) => {
  //     return (
  //       <table className="Displaytable w3ls-table" width="100%">
  //         <tbody>
  //           <tr>
  //             <th>Seats</th>
  //             <th>Price</th>
  //             <th>Total</th>
  //           </tr>
  //           <tr>
  //             <td>
  //               <textarea id="seatsDisplay" defaultValue={""} />
  //               {/* {elemment.soGhe} */}
  //             </td>
  //             <td>
  //               <textarea id="priceDisplay" defaultValue={""} />
  //               {/* {elemment.gia} */}
  //             </td>
  //             <td>
  //               <textarea id="moneyDisplay" defaultValue={""} />
  //               {/* {elemment.soGhe}*{elemment.gia} */}
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     );
  //   });
  // };
  render() {
    // const { soGhe, gia } = this.props.elemment;
    // console.log(soGhe, gia);
    return (
      <div className="displayerBoxes txt-center" style={{ overflowX: "auto" }}>
        {/* <div>{this.rendercontent()}</div> */}
        <table className="Displaytable w3ls-table" width="100%">
          <tbody>
            <tr>
              <th>Seats</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <textarea id="seatsDisplay" defaultValue={""} />
                {/* {soGhe} */}
              </td>
              <td>
                <textarea id="priceDisplay" defaultValue={""} />
                {/* {gia} */}
              </td>
              <td>
                <textarea id="moneyDisplay" defaultValue={""} />
                {/* {soGhe} * {gia} */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.DatGheReducer.danhSachGhe.filter((elemment) => {
      return elemment.daDat === true;
    }),
  };
};

export default connect(mapStateToProps)(ChiTietGhe);
