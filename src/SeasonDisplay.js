import React from "react";
import "semantic-ui-css/semantic.min.css";

const getSeason = (lat, month) => {
  if (month + 1 > 2 && month + 1 < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const weather_data =
    season === "winter"
      ? { text: "Burr,Its too chilly", icon: "snowflake" }
      : { text: "It hot, Lets hit the Beach", icon: "sun" };
  return (
    <div>
      <i className={`${weather_data.icon} icon`}></i>
      <h1>{weather_data.text}</h1>
      <i className={`${weather_data.icon} icon`}></i>
    </div>
  );
};
export default SeasonDisplay;
