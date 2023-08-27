import React, { Component } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  render() {
    const { hang, danhSachGhe, soGhe, gia, daDat } = this.props.element;
    // console.log(hang, danhSachGhe, soGhe, gia, daDat);
    return (
      <div>
        <table id="seatsBlock">
          <tbody>
            <tr>
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td />
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>{hang}</td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A1"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A2"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A3"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A4"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A5"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td className="seatGap" />
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A6"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A7"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A8"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A9"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />
                {(danhSachGhe, soGhe, gia, daDat)}{" "}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A10"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />{" "}
                {(danhSachGhe, soGhe, gia, daDat)}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A11"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />{" "}
                {(danhSachGhe, soGhe, gia, daDat)}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="seats"
                  defaultValue="A12"
                  onClick={() =>
                    this.props.dispatch({
                      type: "DAT_GHE",
                      payload: this.props.element,
                    })
                  }
                />{" "}
                {(danhSachGhe, soGhe, gia, daDat)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Ghe);
