import { createStackNavigator } from 'react-navigation';
import home from '../scenes/home';

const AppNavigator = createStackNavigator(
  {
    Home: home
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;