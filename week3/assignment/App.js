import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaySectionTop from './components/PlaySectionTop';
import PlaySectionBottom from './components/PlaySectionBottom';
import ModalSetting from './components/ModalSetting';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      //0 for rock, 1 for scissors, 2 for paper
      comScore: 0, 
      comChoose: null,
      userScore: 0,
      userChoose: null,
      totalGames: 0,
      isUserWin: null,
      //setting
      onSetting:false,
    }
    this.fight = this.fight.bind(this)
    this.clickSetting = this.clickSetting.bind(this)
    this.reset = this.reset.bind(this)
  }
  reset(){
    this.setState({
      comScore: 0, 
      comChoose: null,
      userScore: 0,
      userChoose: null,
      totalGames: 0,
      isUserWin: null,
    })
  }
  clickSetting(){
    this.setState(prevState => ({
      onSetting:!prevState.onSetting,
    }))
  }
  fight(userChoose){
    var comChoose = Math.floor(Math.random() * Math.floor(3))
    this.setState(prevState => ({
      comChoose: comChoose,
      userChoose: userChoose,
      totalGames: prevState.totalGames+1,
    }))
    var isUserWin = null
    if (userChoose == comChoose){
      isUserWin = 0 //draw
    }
    else if (userChoose == 0 && comChoose == 1){
      isUserWin = 1 //win
    }
    else if (userChoose == 0 && comChoose == 2){
      isUserWin = 2 //lose
    }
    else if (userChoose == 1 && comChoose == 0){
      isUserWin = 2
    }
    else if (userChoose == 1 && comChoose == 2){
      isUserWin = 1
    }
    else if (userChoose == 2 && comChoose == 0){
      isUserWin = 1
    }
    else if (userChoose == 2 && comChoose == 1){
      isUserWin = 2
    }
    this.setState({
      isUserWin: isUserWin,
    })
    if (isUserWin == 1){
      this.setState(prevState => ({
        userScore: prevState.userScore+1
      }))
    }
    if (isUserWin == 2){
      this.setState(prevState => ({
        comScore: prevState.comScore+1
      }))
    }
  }
  render(){
    const draw = this.state.totalGames-this.state.comScore-this.state.userScore
    var winRate = this.state.totalGames==0?0:this.state.userScore/(this.state.userScore+this.state.comScore)
    if (this.state.userScore==0&&this.state.comScore==0) winRate=0
    return (
      <View style={styles.container}>
        <ModalSetting onSetting={this.state.onSetting}
          winRate={winRate}
          draw={draw}
          win={this.state.userScore}
          lose={this.state.comScore}
          clickSetting={this.clickSetting}
          reset={this.reset}/>
        <View style={styles.containerPlaySection}>
          <PlaySectionTop comScore={this.state.comScore}
            comChoose={this.state.comChoose}
            isWinning={this.state.userScore<this.state.comScore}/>
        </View>
        <View style={styles.containerPlaySection}>
          <PlaySectionBottom fight={this.fight} 
            userScore={this.state.userScore} 
            isUserWin={this.state.isUserWin}
            isWinning={this.state.userScore>this.state.comScore}
            clickSetting={this.clickSetting}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  containerPlaySection: {
    flex:1,
    backgroundColor: 'red',
    width:'100%',
    height:'100%',
  }
});
