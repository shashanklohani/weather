import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
      super(props);
      this.state = {
        clouds: {},
        coords:{},
        weatherMain: {},
        sys:{},
        weatherData:{},
        wind:{},
        city: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({city:event.target.value}, console.log(this.state.city));
  }

  handleSubmit(){
    var city = this.state.city;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=c041df17854a908bcdee0dfc3606c794';
    console.log(url);
    fetch(url, {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((resJson) => {
      this.setState({clouds : resJson.clouds,
        coords: resJson.coords,
        weatherMain: resJson.main,
        sys: resJson.sys,
        weatherData : resJson.weather[0],
        wind: resJson.wind
      });
    }).then(() => {
      var clouds = this.state.clouds;
      var coords = this.state.coords;
      var weatherMain = this.state.weatherMain;
      var sys = this.state.sys;
      var weatherData = this.state.weatherData;
      var wind = this.state.wind;
      this.props.setWeatherData(clouds, coords, weatherMain, sys, weatherData, wind);
    }).catch((err) => {
      console.log("err");
    });
  }

  render() {
    return (
      <div className="SearchBar">
      <input className="SearchInput" onChange={this.handleChange} type="text" placeholder="Search Location..."/>
      <button className="SearchButton" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
// AIzaSyCjT4Uxv3MWliJI0dp2iY8a_7UpgJSEFeI