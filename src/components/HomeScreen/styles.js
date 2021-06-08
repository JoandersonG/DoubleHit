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

  });

  //make this component available to the app
  export default styles ;