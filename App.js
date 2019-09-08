import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from './src/screens/ListScreen';
import ColorScreen from './src/screens/ColorScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createAppContainer } from 'react-navigation';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import PlaceSearchScreen from './src/screens/PlaceSearchScreen';

const routeConfigs = {
  // Home:{
  //   screen:HomeScreen,
  //   navigationOptions:()=>({
  //     title:'Home'
  //   })
  // },
  // List:{
  //   screen:ListScreen,
  //   navigationOptions:()=>({
  //     title:'Friends List'
  //   })
  // },
  // Color:{
  //   screen: ColorScreen,
  //   navigationOptions: ()=>({
  //     title:'Color List'
  //   })
  // },
  // Counter:{
  //   screen:CounterScreen,
  //   navigationOptions: ()=>({
  //     title:'Counter Activity'
  //   })
  // },
  // Box:{
  //   screen:BoxScreen,
  //   navigationOptions: ()=>({
  //     title:'Box Activity'
  //   })
  // },
  PlaceSearch:{
    screen:PlaceSearchScreen,
    navigationOptions: ()=>({
      title:'Google Restaurant Search'
    })
  }
}

const stackNavigatorConfig = {
  initialRootName:'PlaceSearch',
  defaulNavigationOption:()=>({
    title:'Restaurant Search Activity'
  })
}

const navigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

export default createAppContainer(navigator);
