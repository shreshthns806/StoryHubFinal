import * as React from 'react';
import * as firebase from 'firebase';
import db from '../config'
import { StyleSheet, Text, View, TextInput , Image, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    
    constructor(){
      super();
      this.state = {
        emailID:'',
        password:'',
      }
    }

    componentDidMount(){
        this.resetState
    }

    resetState = ()=> {
        this.setState({
            emailID:'',
            password:'',
        })
    }

    buttonPress = async ()=> {
        const email = this.state.emailID;
        const password = this.state.password;
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('TabNavigator')
                    Alert.alert('Login Succesfull')   
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert('User does not exist');
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Incorrect Email ID or password');
                        break;
                    case 'auth/wrong-password':
                        Alert.alert('Incorrect Password')
                        break;
                    
                }
            }
        }
        else{
            Alert.alert('Please Enter Email and Password!')
        }
    }

    render(){
      return(
        <KeyboardAvoidingView style = {styles.container}>
        <Header
            backgroundColor={'black'}
            centerComponent={{
              text: 'Bed Time Stories',
              style: { color: '#fff', fontSize: 20 },
            }}
        />
        <TextInput
            style={styles.textInput}
            keyboardType='email-address'
            placeholder='Enter your Email ID here.....'
            onChangeText={
                (text)=>{
                    this.setState({
                        emailID:text,
                    })
                }
            } 
        ></TextInput>
        <TextInput
            style={styles.textInput}
            placeholder='Enter your Password here.....'
            secureTextEntry = {true}
            onChangeText={
                (text)=>{
                    this.setState({
                        password:text,
                    })
                }
            } 
        ></TextInput>
        <TouchableOpacity
            onPress={this.buttonPress}
            style={styles.button}
        >
            <Text
                style={styles.buttonText}
            >
                Login
            </Text>
        </TouchableOpacity>
        <Image
            source={{
              uri:
                'https://www.incimages.com/uploaded_files/image/1920x1080/getty_690360222_20001333165376734769_408521.jpg',
            }}
            style={{ width: 200, marginTop:35, height: 140, alignSelf: 'center' }}
          />
        </KeyboardAvoidingView>
      )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    textInput:{
        marginTop:50,
        padding:10,
        alignSelf:'center',
        borderWidth:5,
        borderColor:'pink',
        width:300,
        color:"pink",
    },
    button:{
        backgroundColor:'limegreen',
        width:250,
        marginTop:70,
        alignSelf:'center',
        height:40,
    },
    buttonText:{
        padding:10,
        color:'black',
        alignSelf:'center',
    },
    text:{
        color:'black',
    }
})