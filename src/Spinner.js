import React from "react";
const Spiner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};
Spiner.defaultProps = {
  message: "Loading...",
};
export default Spiner;
