import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { getWeatherIcon } from '../data/cities'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class WeatherStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                name: "saigon",
                weather: [{ main: "", description: "" }],
            },
            loadLocation: true,
            errorLocation: false,
        }
    }
    componentDidMount() {
        this.getLocationAsync()
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
            loadLocation: true,
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
                errorLocation: true
            })
        }
        this.setState({
            loadLocation: false,
        })
    };
    render() {
        if (this.state.loadLocation) return (<View></View>)
        return (
            <View style={styles.weather}>
                <TouchableOpacity onPress={() => this.props.navigate('Weather')}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 5, }}>{this.state.location.name}</Text>
                        <Text>{this.state.location.weather[0].description}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <MaterialCommunityIcons
                        size={40}
                        color="lightgrey"
                        style={{ alignSelf: 'center', }}
                        name={getWeatherIcon(this.state.location.weather[0].main)}
                    />
                    <Text>{Math.floor((this.state.location.main.temp - 32) * 5 / 9)} °C</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    weather: {
        width: '80%',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
})