//import liraries
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import Category from "./src/components/CategoryScreen";
import Login from "./src/components/LoginScreen";
import Register from "./src/components/RegisterScreen";

const MainDrawer = createDrawerNavigator(
  {
    Home: Home,
    Basquete: Category,
    
  },
  {
    //Prop
    contentOptions: {
      //Sempre que a aba estiver ativa, manter essa cor
      activeTintColor: `#80ccc0`,
      //Prop
      //Permite aumentar a fonte
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
