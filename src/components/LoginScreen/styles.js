import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    button: {
      width: 300,
      height: 42,
      backgroundColor: 'black',
      marginTop: 20,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    logo: {
      width: 180,
      height: 150,
      marginBottom: 15
    },

    input:{
      marginTop: 20,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 7,
    },

    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },

    bottomText: {
      fontWeight: '500'
    },

    bottomTextClickable: {
      marginTop: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

    loginFieldsContainer: {
      backgroundColor: 'rgba(200, 200, 200, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      flexWrap:'wrap',
      borderRadius: 20
    }
  });

  //make this component available to the app
  export default styles ;