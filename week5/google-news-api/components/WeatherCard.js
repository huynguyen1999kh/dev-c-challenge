import React from 'react'
import { ActivityIndicator, Text, View } from "react-native";
import styles from '../style/WeatherScreenStyle'
import { getWeatherIcon } from '../data/cities'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const temperatureC = (this.props.location.main.temp - 273.15).toFixed(2);
        const temperatureF = (((this.props.location.main.temp - 273.15) * 9) / 5 + 32).toFixed(
            2
        );
        const description = this.props.location.weather[0].description;
        const windSpeed = this.props.location.wind.speed;
        const icon = this.props.location.weather[0].main;

        const capitalizedDescription =
            this.props.location.weather[0].description && description.charAt(0).toUpperCase() + description.slice(1);

        const Loading = () => (
            <ActivityIndicator  style={styles.loading}/>
        );
        if (this.props.error) {
            return (
                <View style={styles.container}>
                    <Text>Error fetching weather!</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.weatherContainer}>
                    {this.props.loading && <Loading />}
                    <View style={styles.row}>
                        <MaterialIcons name="location-city" size={25} color="lightgrey" />
                        <Text style={styles.locationText}>{this.props.location.name}</Text>
                    </View>
                    <View style={[styles.row, { marginTop: 10 }]}>
                        <MaterialCommunityIcons
                            size={25}
                            color="lightgrey"
                            name="speedometer"
                        />
                        <Text style={styles.text}>{this.props.location.wind.speed}</Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons
                            size={25}
                            color="lightgrey"
                            name={getWeatherIcon(icon)}
                        />
                        <Text style={styles.text}>{this.props.location.weather[0].description}</Text>
                    </View>

                    <View style={styles.tempRow}>
                        <View style={styles.row}>
                            <MaterialCommunityIcons
                                size={25}
                                color="lightgrey"
                                name="temperature-fahrenheit"
                            />
                            <Text style={styles.text}>{this.props.location.main.temp}</Text>
                        </View>
                        <View style={styles.row}>
                            <MaterialCommunityIcons
                                size={25}
                                color="lightgrey"
                                name="temperature-celsius"
                            />
                            <Text style={styles.text}>{this.props.location.main.temp}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}