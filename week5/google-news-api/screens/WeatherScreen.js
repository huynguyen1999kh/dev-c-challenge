import React from 'react';
import {styles} from '../style/WeatherScreenStyle'
import {cities} from '../data/cities'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class WeatherScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      location: {},
    }
  }
  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    getWeather(location.coords.latitude, location.coords.longitude);
  };
  getWeather = async (latitude, longitude, imgUrl = "") => {
    setLoading(true);
    const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      this.setState({
        location : {...jsonData, imgUrl },
      });
    } catch (error) {
      setError(true);
    }
    this.setState({
      loading: false,
    })
  };
  render(){
    <View>
      
    </View>
  }
}
