import React from "react";
import propTypes from "prop-types";
const SimpleCounter = (props) => {
  const renderStyles = {color: "#fafafa", fontSize: "70px"}
  // const countList = String(props.count).split('').reverse('')
  return (
     <>
      <div className="counter-display d-flex justify-content-center text-light">
        <div className="clock fs-3 d-flex justify-content-center align-items-center">
          <i className="far fa-clock" style={renderStyles}></i>
        </div>
        <h1 className="each-row fs-3">{props.sixDigit}</h1>
        <h1 className="each-row fs-3">{props.fiveDigit}</h1>
        <h1 className="each-row fs-3">{props.fourDigit}</h1>
        <h1 className="each-row fs-3">{props.threeDigit}</h1>
        <h1 className="each-row fs-3">{props.twoDigit}</h1>
        <h1 className="each-row fs-3">{props.oneDigit}</h1>
      </div>
     </>
  )
}

SimpleCounter.propTypes = {
  oneDigit: propTypes.number,
  twoDigit: propTypes.number,
  threeDigit: propTypes.number,
  fourDigit: propTypes.number,
  fiveDigit: propTypes.number,
  sixDigit: propTypes.number,

}

export default SimpleCounter