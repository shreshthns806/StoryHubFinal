import * as React from 'react';
import * as firebase from 'firebase';
import db from '../config'
import { StyleSheet, Text, View, TextInput , Image, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    
    constructor(){
      super();
      this.state = {
        storyTitle:'',
        storyContent:'',
        storyAuthor:'',
      }
    }
    onButtonPress = async () => {
      db.collection('stories').add({
        'storyTitle' : this.state.storyTitle,
        'storyContent' : this.state.storyContent,
        'storyAuthor' : this.state.storyAuthor,
      })
      Alert.alert("Submission complete")
      this.setState({
        storyTitle:'',
        storyContent:'',
        storyAuthor:'',
      })
    }
    render(){
      return(
        <KeyboardAvoidingView style = {{backgroundColor:'black', flex:1}}>
          <Header
            backgroundColor={'black'}
            centerComponent={{
              text: 'Bed Time Stories',
              style: { color: 'white', fontSize: 20 },
            }}
          />
          <TextInput
            style = {{borderWidth:3, borderColor:'white', paddingLeft:10,color:'white',paddingRight:10}}
            placeholder="Enter your Story Title Here"
            onChangeText={(text) => {
              this.setState({ storyTitle: text });
            }}
            value={this.state.storyTitle}
          />

          <TextInput
            style = {{borderWidth:3, borderColor:'white', paddingLeft:10,color:'white',paddingRight:10}}
            placeholder="Enter your Story's Author here"
            onChangeText={(text) => {
              this.setState({ storyAuthor: text });
            }}
            value={this.state.storyAuthor}
          />

          <TextInput
            style = {{borderWidth:3, borderColor:'pink', paddingLeft:10, marginTop:5, color:'pink', paddingRight:10, height:'45%'}}
            multiline={true}
            placeholder="Enter your story here"
            onChangeText={(text) => {
              this.setState({storyContent: text})
            }}
            value = {this.state.storyContent}
          />

          <TouchableOpacity onPress={this.onButtonPress} style = {{borderColor:'pink', borderWidth:3, width:60, marginTop:10, alignSelf:'center'}}>
            <Text style = {{color:'white', alignSelf:'center'}}>Submit</Text>
          </TouchableOpacity>

          <Image
            source={{
              uri:
                'https://life-craft.org/wp-content/uploads/2017/11/Man-Telling-Story.jpg',
            }}
            style={{ width: 200, height: 120, alignSelf: 'center', marginTop:10}}
          />
        </KeyboardAvoidingView>
      )
    }
}  