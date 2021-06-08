import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
    liveComponent: {
      backgroundColor: '#2ba355',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginHorizontal: 7,
      marginBottom: 15,
    },

    championshipView: {
      width: '100%',
      backgroundColor: 'red',
      flexDirection: 'row',
      marginBottom:10,
      
    },

    championshipText: {
      color: 'white',
      fontSize: 12,
      marginBottom: 20,
      marginTop: 5,
    },

    teams: {
      flexDirection: 'row',
      marginBottom:10,
      alignSelf: 'center'
    },

    teamText: {
      color: 'white',
      fontSize: 16,
      marginStart: 10,
      marginEnd: 10
    },

    teamLogo: {
      width: 30,
      height: 30,
    },

    verticalAlign: {
      alignItems: 'center',
    },

    textAposta: {
      color: 'white',
      fontSize: 10,
    },

    buttonAposta: {
      backgroundColor: 'white',
      marginStart: 10,
      marginEnd: 10,
      borderRadius: 5,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 5,
      justifyContent: 'center',
    },

    buttonApostaText: {
      fontWeight: '600'
    },

  });

  //make this component available to the app
  export default styles ;