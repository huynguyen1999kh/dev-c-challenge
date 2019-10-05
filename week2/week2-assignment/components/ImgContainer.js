import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { imgData } from '../data/img';

// {this.state.imgs.map(img => {
//   return (
//     <Image source={img.image} key={img.id}/>
//   )
// })}
class ImgContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: imgData,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          numColumns={2}
          width={320}
          data={this.state.imgs}
          renderItem={({ item }) => (
            <View style={styles.imgWrapper}>
              <Image
                source={item.image}
                style={styles.img}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  img: {
    flex: 1,
    borderRadius: 7,
    width: 150,
    height: 140,
    resizeMode:"cover",
  },
  imgWrapper: {
    flex: 1,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImgContainer;
