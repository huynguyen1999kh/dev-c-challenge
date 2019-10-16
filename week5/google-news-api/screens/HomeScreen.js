import React from 'react';
import { View, ActivityIndicator, Text, FlatList, Linking, Platform, Image, TouchableOpacity } from 'react-native'
import { gooogleAPI } from '../constants/APIkeys'
import moment from 'moment';
import { Card, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import styles from '../style/HomeScreenStyle'
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      listArc: [],
      pageNumber: 1,
      hasError: false,
      lastPageReached: false,
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
    <Card title={item.title} image={{ uri: item.urlToImage }}>
      <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{item.source.name}</Text>
      </View>
      <Text>{item.content}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Published</Text>
        <Text style={styles.info}>
          {moment(item.publishedAt).format('LLL')}
        </Text>
      </View>
      <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4"
        onPress={() => this.readMore(item.url)} />
    </Card>
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
    if (this.state.isLoading){
      return (
        <ActivityIndicator style={styles.loader} size="large" loading={this.state.isLoading} />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity>
            <Icon name={Platform.OS === 'ios'? 'ios-search' : 'md-search'} type='ionicon'></Icon>
          </TouchableOpacity>
          <Image style={styles.headLabel} source={require('../assets/images/headLabel.png')} resizeMode='contain'/>
          <TouchableOpacity>
            <Icon name={Platform.OS === 'ios'? 'ios-settings' : 'md-settings'} type='ionicon'></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Articles Count:</Text>
          <Text style={styles.info}>{this.state.listArc.length}</Text>
        </View>
        <FlatList
          data={this.state.listArc}
          renderItem={this.renderArticle}
          keyExtractor={item => item.title}
          onEndReached={this.getNews}
          onEndReachedThreshold={1}
          ListFooterComponent={this.state.lastPageReached?
            <Text style={styles.end}>No more articles</Text>: 
            <ActivityIndicator size="large" loading={this.setState.isLoading} />} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};