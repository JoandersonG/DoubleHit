//import liraries
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import Basquete from "./src/components/BasqueteScreen";
import Futebol from "./src/components/FutebolScreen";
import NFL from "./src/components/NFLScreen";
import CSGO from "./src/components/CSGOScreen";
import Login from "./src/components/LoginScreen";
import Register from "./src/components/RegisterScreen";

const MainDrawer = createDrawerNavigator(
  {
    Home: Home,
    'CS:GO': CSGO,
    NFL: NFL,
    Futebol: Futebol,
    Basquete: Basquete,
  },
  {
    contentOptions: {
      activeTintColor: `#80ccc0`,
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Cadastro",
      headerTitleAlign: 'center'
    },
  },
  Drawer: {
    screen: MainDrawer,
    navigationOptions: {
      headerShown: false,
    },
  },

});

//make this component available to the app
//export the component of our drawer
export default createAppContainer(AppNavigator);
