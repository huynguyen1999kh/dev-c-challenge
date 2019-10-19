import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    error: {
      fontSize: 20,
      fontWeight: '600',
      alignSelf: 'center',
      position: 'absolute',
      color: 'red',
      top: '50%',
    },
    end: {
      fontSize: 20,
      fontWeight: '500',
      alignSelf: 'center',
      marginVertical: 10,
    },
    loader: {
      position: 'absolute',
      alignSelf: 'center',
      top: '50%',
    },
    containerFlex: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      flex: 1,
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    header: {
      height: 30,
      width: '100%',
      backgroundColor: 'pink'
    },
    row: {
      flexDirection: 'row'
    },
    label: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold'
    },
    info: {
      fontSize: 16,
      color: 'grey'
    },
    head: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headLabel: {
        height: 30,
        width: '80%',
    },
    invisible: {
        display: 'none',
    },
    article: {
      width:'100%', 
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderColor: '#f2f2f2',
      borderBottomWidth: 1,
    },
    articleImg: {
      width: 130,
      height: 130,
      resizeMode: 'cover',
      borderRadius: 20,
    },
    title: {
      flex: 1,
      fontSize: 16,
      color: 'black',
      marginRight: 10,
      fontWeight: 'bold',
    }
  });
  