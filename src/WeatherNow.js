import React, { Component } from 'react';
import './WeatherNow.css';

class WeatherNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.weatherData);
      return (
        <div className="WeatherNow" style={this.props.weatherStatus === "visible" ? {display : "initial"} : {display : "none"}}>
          <div className="Temp">{this.props.weatherMain === null ? 17 : this.props.weatherMain.temp }&deg;F</div>
          <div className="minmaxTemp"><div>Min Temp</div><div>{this.props.weatherMain === null ? 17 : this.props.weatherMain.temp_min}&deg;F</div></div>
          <div className="minmaxTemp"><div>Max Temp</div><div>{this.props.weatherMain === null ? 17 : this.props.weatherMain.temp_max}&deg;F</div></div>
          <div className="Wind">Wind</div>
          <div className="Speed"><div>Speed</div><div>{this.props.wind === null ? 17 : this.props.wind.speed}</div></div>
          <div className="Deg"><div>Deg</div><div>{this.props.wind === null ? 17 : this.props.wind.deg}</div></div>
        </div>
      );
  }
}

export default WeatherNow;