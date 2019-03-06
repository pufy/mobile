import { createStackNavigator, createAppContainer } from 'react-navigation';
import home from '../scenes/home';
import player from '../scenes/player';

const RNApp = createStackNavigator(
  {
    player: {
          screen: player,
          navigationOptions: { header: null }
      },
      home: {
          screen: home,
          navigationOptions: { header: null }
      }
  },
  {
      initialRouteName: 'home'
  }
);

export default createAppContainer(RNApp);