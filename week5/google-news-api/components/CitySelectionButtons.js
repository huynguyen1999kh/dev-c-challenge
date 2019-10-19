import React from 'react'
import { Text, View, TouchableOpacity } from "react-native";
import styles from '../style/WeatherScreenStyle'
import { cities, getWeatherIcon, getWeatherBackgroundImage } from '../data/cities'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class CitySelectionButtons extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onChooseCity('')
    }
    render(){
        return(
            <View style={styles.cityContainer}>
                <TouchableOpacity
                    key="currentLocation"
                    style={styles.currentLocation}
                    onPress={() => this.props.onChooseCity("")}
                >
                    <Text style={styles.cityName}>Current Location</Text>
                </TouchableOpacity>
                {cities.map(city => {
                    return (
                        <TouchableOpacity
                            key={city.name}
                            style={styles.cityButton}
                            onPress={() => this.props.onChooseCity(city.name)}
                        >
                            <Text style={styles.cityName}>{city.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}