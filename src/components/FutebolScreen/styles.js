import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
    },
    
    topbar: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    topbarText: {
      fontSize: 20,
      fontWeight: '600',
      alignSelf: 'center'
    },
  
    backButton: {
      position: "absolute", 
      top: 15,
      start: 20,
    },
  
    backButtonText: {
      fontWeight: '600',
      fontSize: 20,
    },
  

    banner: {
      width: '100%',
      height: '70%',
      marginBottom: 15,
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
      marginBottom: 70,
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },

    gameComponent: {
      backgroundColor: '#2ba355',
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
      alignSelf: 'center'
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

  });

  //make this component available to the app
  export default styles ;