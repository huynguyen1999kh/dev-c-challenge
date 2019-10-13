import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export class BaseScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLight: true,
        }
    }
    changeTheme = () => {
        this.setState({
            isLight: !this.state.isLight
        })
    }
    componentDidMount(){
        setInterval(this.changeTheme, 1000);
    }
    render(){
    return(
      <View style={this.state.isLight? styles.containerLight: styles.containerDark}>
        {this.props.children}
      </View>
    )
  }
}
  const styles = StyleSheet.create({
    containerLight: {
      width: '100%',
      height:'100%',
      backgroundColor :'#fff',
    },
    containerDark: {
        width: '100%',
        height:'100%',
        backgroundColor: '#000'
      },
})
  