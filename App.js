import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from "./screens/ReadStory";
import WriteStoryScreen from "./screens/WriteStory";
export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScreen},
  WriteStory:{screen:WriteStoryScreen},
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'black',
    },
  }
}
)

const AppContainer = createAppContainer(tabNavigator)