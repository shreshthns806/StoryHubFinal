import * as React from 'react';
import { StyleSheet, Text, View, TextInput , Image} from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    render(){
      return(
        <View style = {{backgroundColor:'black', flex:1}}>
          <Header
            backgroundColor={'black'}
            centerComponent={{
              text: 'Bed Time Stories',
              style: { color: 'white', fontSize: 20 },
            }}
          />
          <Text style = {{color:'pink', alignSelf:'center'}}>Write your story here 👇</Text>
          <TextInput
            style = {{borderWidth:3, borderColor:'pink', paddingLeft:10,color:'pink', paddingRight:10, height:'60%'}}
            multiline={true}
          />
          <Image
            source={{
              uri:
                'https://life-craft.org/wp-content/uploads/2017/11/Man-Telling-Story.jpg',
            }}
            style={{ width: 200, height: 140, alignSelf: 'center' }}
          />
        </View>
      )
    }
}  