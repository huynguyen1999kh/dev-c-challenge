import React from 'react';
import { View, ActivityIndicator, Text, FlatList, Linking, Platform, Image, TouchableOpacity, TextInput } from 'react-native'
import { gooogleAPI } from '../constants/APIkeys'
import moment from 'moment';
import { Card, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import styles from '../style/HomeScreenStyle'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { getWeatherIcon } from '../data/cities'
import WeatherStatus from '../components/WeatherStatus';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      listArc: [],
      pageNumber: 1,
      hasError: false,
      lastPageReached: false,
      location: {
        name: "saigon",
        weather: [{ main: "", description: "" }],
      },
      loadLocation: true,
      errorLocation: false,
    }
  }
  componentDidMount() {
    this.getNews()
  }
  getNews = async () => {
    if (this.state.lastPageReached) return
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + gooogleAPI + '&page=' + this.state.pageNumber
      );
      const data = await response.json()
      const hasMoreArticles = data.articles.length > 0;
      if (!hasMoreArticles) {
        await this.setState({
          lastPageReached: true,
        },
        )
        return
      }
      await this.setState(prev => ({
        isLoading: false,
        pageNumber: prev.pageNumber + 1,
        listArc: this.filterForUniqueArticles(prev.listArc.concat(data.articles)),
      }))
    }
    catch (err) {
      this.setState({
        hasError: true,
      })
      console.warn(err)
    }
  };
  filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };
  renderArticle = ({ item }) => (
    <View style={styles.article}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{item.title.split(' - ')[0]}</Text>
          <Text style={styles.info}>{item.source.name}</Text>
        </View>
        <Image style={styles.articleImg} source={{ uri: item.urlToImage }}></Image>
      </View>
      <Text style={{marginVertical: 10}}>{item.content}</Text>
      <View style={styles.row}>
        <Text style={styles.info}>
          {moment(item.publishedAt).format('LLL')}
        </Text>
      </View>
      <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4"
        onPress={() => this.readMore(item.url)} />
    </View>
  )
  readMore = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <Text style={styles.error}>Some errors has occurred</Text>
      )
    }
    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={styles.loader} size="large" loading={this.state.isLoading} />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} type='ionicon'></Icon>
          </TouchableOpacity>
          <Image style={styles.headLabel} source={require('../assets/images/headLabel.png')} resizeMode='contain' />
          <TouchableOpacity>
            <Icon name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} type='ionicon'></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Articles Count: </Text>
          <Text style={styles.info}>{this.state.listArc.length}</Text>
        </View>
        <FlatList
          style={{ width: '100%' }}
          data={this.state.listArc}
          renderItem={this.renderArticle}
          keyExtractor={item => item.title}
          onEndReached={this.getNews}
          onEndReachedThreshold={1}
          ListHeaderComponent={<WeatherStatus navigate={this.props.navigation.navigate}/>}
          ListFooterComponent={this.state.lastPageReached ?
            <Text style={styles.end}>No more articles</Text> :
            <ActivityIndicator size="large" loading={this.setState.isLoading} />} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};