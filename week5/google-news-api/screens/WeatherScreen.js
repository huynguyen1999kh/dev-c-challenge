import React from 'react';
import styles from '../style/WeatherScreenStyle'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import WeatherCard from '../components/WeatherCard';
import CitySelectionButtons from '../components/CitySelectionButtons';
import { cities } from '../data/cities';
import { MaterialIcons } from '@expo/vector-icons'

export default class WeatherScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      location: {
        name: "",
        main: { temp: "" },
        wind: { speed: "" },
        weather: [{ main: "", description: "" }],
      },
      imgUrl: require('../assets/images/saigon1.jpg'),
      error: false,
    }
  }
  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    this.getWeather(location.coords.latitude, location.coords.longitude);
  };
  getWeather = async (latitude, longitude) => {
    this.setState({
      loading: true,
    })
    const API_KEY = "6d13627a6b502fde5b1e7654b2753249";
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      this.setState({
        location: jsonData,
      });
    } catch (error) {
      this.setState({
        error: true
      })
    }
    this.setState({
      loading: false,
    })
  };
  onChooseCity = name => {
    let randImg = "";
    if (name !== "") {
      const city = cities.find(city => city.name === name);
      randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];
      this.setState({
        imgUrl: randImg,
      })
      this.getWeather(city.latitude, city.longitude);
    } else {
      this.getLocationAsync();
    }
  };
  render() {
    return (
      <View style={styles.bg}>
        <ImageBackground
          resizeMode='cover'
          style={{ width: '100%', height: '100%' }}
          source={this.state.imgUrl}>
          <View style={{ height: 90, justifyContent: 'center', marginLeft: 10, }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <MaterialIcons size={40} name='arrow-back'></MaterialIcons>
            </TouchableOpacity>
          </View>
          <WeatherCard
            error={this.state.error}
            loading={this.state.loading}
            location={this.state.location}
          />
          <CitySelectionButtons
            onChooseCity={this.onChooseCity} />
        </ImageBackground>
      </View>
    );
  };
}

WeatherScreen.navigationOptions = {
  header: null
}