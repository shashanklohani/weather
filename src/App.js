import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import SearchBar from './SearchBar';
import WeatherNow from './WeatherNow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clouds: null,
      coords: null,
      weatherMain: null,
      sys: null,
      weatherData: null,
      wind: null,
      weatherStatus: "hidden"
    };
    this.setWeatherData = this.setWeatherData.bind(this);
  }

  setWeatherData(clouds, coords, weatherMain, sys, weatherData, wind) {
    console.log(clouds);
    this.setState({
      clouds:clouds,
      coords:coords,
      weatherMain:weatherMain,
      sys:sys,
      weatherData:weatherData,
      wind:wind,
      weatherStatus: "visible"
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setWeatherData={this.setWeatherData} />
        <WeatherNow clouds={this.state.clouds} wind={this.state.wind} coords={this.state.coords} weatherMain={this.state.weatherMain} weatherData={this.state.weatherData}  sys={this.state.sys}  weatherStatus={this.state.weatherStatus}/>
      </div>
    );
  }
}

export default App;
