import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.avatar}
            source={require('../assets/avatar.jpg')}
            resizeMode="center"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>kiona Anh</Text>
          <Text style={styles.job}>business analyst</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonFollow}>
              <Text style={styles.whiteText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInbox}>
              <FontAwesome name="paper-plane-o" size={10} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  job: {
    marginLeft: 10,
  },
  whiteText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonFollow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(71,113,246)',
    borderRadius: 20,
    width: 90,
    marginHorizontal: 3,
    paddingVertical: 2,
  },
  buttonInbox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(120,213,250)',
    borderRadius: 20,
    width: 50,
    paddingVertical: 2,
    marginHorizontal: 3,
  },
});
