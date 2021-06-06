import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    topbar: {
      width: '100%',
      height: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    logo: {
      width: 160,
      height: 35,
    },

    scrollView: {
      width: '100%',
      marginBottom: 10,
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },

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
    },

    teamText: {
      color: 'white',
      fontSize: 16
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

    buttonCategory: {
      width: '40%',
      backgroundColor: '#2ba355cd',
      marginStart: 15,
      marginEnd: 15,
      borderRadius: 5,
      alignItems: 'center',
      paddingHorizontal: 40,
      paddingVertical: 15,
      justifyContent: 'center',
    },

    buttonCategoryText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 20,
    },

    liveText: {
      fontSize: 16,
      fontWeight: '500',
      marginTop: 10,
      marginStart: 10,
      marginBottom: 10,
    },

    homeTitle: {
      color: 'black',
      fontSize: 34,
      marginTop: 26,
    },

    homeWelcome: {
      color: 'black',
      fontSize: 20,
      marginTop: 20,
    },

    button: {
      width: 300,
      height: 42,
      backgroundColor: '#5599ff',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

  });

  //make this component available to the app
  export default styles ;