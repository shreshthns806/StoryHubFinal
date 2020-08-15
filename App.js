import * as React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStory';
import WriteStoryScreen from './screens/WriteStory';
import LoginScreen from './screens/LoginScreen'
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
    defaultNavigationOptions: ({navigation})=> {
      return(
        {tabBarIcon: ()=> {
            const routeName = navigation.state.routeName
            if(routeName=='ReadStory'){
              return(
                <Image source = {require('./assets/read.png')} style = {{width:32, height:32}}></Image>
              ) 
            }
            else if(routeName=="WriteStory"){
              return(
                <Image source = {require('./assets/write.png')} style = {{width:32,height:32}}></Image>
              )
            }
          }
        }
      )
    }
  }
  )

  const switchNavigator = createSwitchNavigator({
    LoginScreen:{screen:LoginScreen},
    TabNavigator:{screen:tabNavigator}
  })
  
const AppContainer = createAppContainer(switchNavigator)