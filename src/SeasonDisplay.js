import React from "react";
import "./SeasonDisplay.css";
import "semantic-ui-css/semantic.min.css";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month + 1 > 2 && month + 1 < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  );
};
export default SeasonDisplay;
