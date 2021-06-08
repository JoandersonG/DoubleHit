import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ccaaff'
    },
    
    topbar: {
      width: '100%',
      height: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topbarText: {
      fontSize: 20,
    },

    banner: {
      width: '100%',
      height: '70%',
      marginBottom: 15,
    },


    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

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
    
    scrollView: {
      width: '100%',
      height: '100%',
      marginBottom: 10,
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },

    gameComponent: {
      backgroundColor: '#c833abff',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginHorizontal: 30,
      marginVertical: 15,
      alignItems: 'center'
    },

    championshipView: {
      width: '100%',
      backgroundColor: 'red',
      flexDirection: 'row',
      marginBottom:10,
      
    },

    championshipText: {
      color: 'white',
      fontSize: 14,
      marginBottom: 20,
      marginTop: 5,
    },

    teams: {
      flexDirection: 'row',
      marginBottom:10,
    },

    teamText: {
      color: 'white',
      fontSize: 22
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
      fontSize: 14,
    },

    buttonAposta: {
      backgroundColor: 'white',
      marginStart: 10,
      marginEnd: 10,
      borderRadius: 5,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 5,
      justifyContent: 'center',
    },

    buttonApostaText: {
      fontSize: 20,
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

    liveText: {
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      marginStart: 10,
      marginBottom: 10,
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