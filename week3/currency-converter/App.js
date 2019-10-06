import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Picker } from 'react-native';
import { CurrencyData } from './Data/Currency';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentFrom: CurrencyData[0],
      currentTo: CurrencyData[1],
      moneyInput: '',
      moneyOutput: '',
      rate: 0,
    } 
    this.currencyAPI = this.currencyAPI.bind(this)
  }

  currencyAPI(moneyInputs) {
    var from = this.state.currentFrom.code
    const request = "https://api.ratesapi.io/api/latest?base=" + from;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', request);
    const scope = this
    xhr.onload = function () {
      if (xhr.status === 200) {
        //console.warn('ok')
        var response = JSON.parse(xhr.responseText)
        var rate = response.rates[scope.state.currentTo.code]
        var toValue = rate * moneyInputs
        var moneyOutputs = toValue.toFixed(2).toString()
        scope.setState({
          moneyInput: moneyInputs,
          moneyOutput: moneyOutputs,
          rate: rate,
        })
        //console.warn('from'+from+'to'+to+":"+scope.state.moneyInput+"=>"+scope.state.moneyOutput+"..."+response)
        //console.warn('now:'+scope.state.currentTo.code)
      }
      else {
        //console.warn('fail')
      }
    }
    xhr.send();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize:20}}>Currency Converter</Text>
        </View>
        <View style={styles.converterContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.valueContainer}>
              <Text style={styles.textDec}>Input your value</Text>
              <TextInput
                style={styles.textInput}
                keyboardType='number-pad'
                autoFocus={true}
                onChangeText={(text) => this.currencyAPI(text)}
                placeholder={this.state.currentFrom.code} />
            </View>
            <View style={styles.currencyContainer}>
              <Picker
                style={styles.currencyPicker}
                selectedValue={this.state.currentFrom}
                onValueChange={(itemValue) => {
                  this.setState({ currentFrom: itemValue })
                  this.currencyAPI(this.state.moneyInput)}}>
                {CurrencyData.map(item => {
                  return <Picker.Item label={item.code + ' ' + item.flag} value={item} key={item.id} />
                })}
              </Picker>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.valueContainer}>
              <Text style={styles.textDec}>Converted Value</Text>
              <TextInput
                editable={false}
                style={styles.textInput}
                keyboardType='number-pad'
                value={this.state.moneyOutput}
                placeholder={this.state.currentTo.code} />
            </View>
            <View style={styles.currencyContainer}>
              <Picker
                style={styles.currencyPicker}
                selectedValue={this.state.currentTo}
                onValueChange={(itemValue) => {
                  this.setState({ currentTo: itemValue })
                  this.currencyAPI(this.state.moneyInput)}}>
                {CurrencyData.map(item => {
                  return <Picker.Item label={item.code + ' ' + item.flag} value={item} key={item.id} />
                })}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.rateContainer}>
          <Text style={{fontSize: 30}}>{this.state.currentFrom.flag}  -  {this.state.currentTo.flag}</Text>
          <Text style={{fontSize: 30,margin:10, paddingHorizontal:10,paddingVertical:5, borderRadius:5, backgroundColor:'deepskyblue'}}>
            current rate: {this.state.rate!=null?this.state.rate.toFixed(2):''}
          </Text>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
    marginVertical: 23,
    paddingVertical: 10,
  },
  rateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },  
  converterContainer: {
    padding: 20,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginVertical: 5,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueContainer: {
    justifyContent: 'center',
    flex: 2.1,
  },
  currencyContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    flex: 2,
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'deepskyblue',
    paddingHorizontal: 15,
    marginRight: 5,
    fontSize: 25,
  },
  textDec: {
    flex: 1,
    fontSize: 15,
  },
  currencyPicker: {
    flex: 1,
    marginTop: 10,
  }
});
