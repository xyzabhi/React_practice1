import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spiner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    // console.log("Componentdid MOunt Called");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message }),
    );
  }
  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error:{this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else return <Spiner message="Please Accept location request" />;
  }
  //React says we  have to define render!
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
