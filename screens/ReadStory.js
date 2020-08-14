import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    
  constructor () {
    super();
    this.state = {
      allEntries : [],
      lastVisibleEntry : null,
      search:'',
      searchWhere:'',
    }
  }

    componentDidMount = async()=> {

      const entries = await db.collection('stories').limit(10).get();
      entries.docs.map(
        (item)=>{
          this.setState({
            allEntries:[...this.state.allEntries,item.data()],
            lastVisibleEntry:item,
          })
        }
      )
      //console.log(this.state.allEntries)
    }

    //retrieveEntries = async ()=> {
    //  //console.log('Entered retrieveEntries')
    //  const entries = await db.collection('stories').liimit(10).get();
    //  entries.docs.map(
    //    (item)=>{
    //      this.setState({
    //        allEntries:[...this.state.allEntries,item.data()],
    //        lastVisibleEntry:item,
    //      })
    //    }
    //  )
    //  console.log('Exited RetrieveEntries')
    //}

    searchByFilter = async (arg1)=> {
      this.setState({
        searchWhere:arg1,
        allEntries:[],
        lastVisibleEntry:null,
      })
      const searchWhere = this.state.searchWhere;
      const txt = this.state.search;
        const entries = await db.collection('stories').where(searchWhere,'==',txt).limit(10).get()
        entries.docs.map(
          (item)=>{
            console.log(item.data())
            this.setState({
              allEntries:[...this.state.allEntries,item.data()],
              lastVisibleEntry:item,
            })
          }
        )
    }

    fetchMoreEntries = async ()=> {
      //console.log('Entered FetchMoreEntries')
      const entries = await db.collection('stories').startAfter(this.state.lastVisibleEntry).limit(10).get()
      entries.docs.map(
        (item)=>{
          this.setState({
            allEntries:[],
            lastVisibleEntry:item,
          })
        }
      )
      //console.log('Exited fetchMoreEntries')
    }

    render(){
      //console.log('inside Render')
      return(
        <View style = {{flex:1, backgroundColor:'black'}}>
          <Header
            backgroundColor={'black'}
            centerComponent={{
              text: 'Bed Time Stories',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
          <SearchBar
            placeholder="Search....."
            onChangeText={(search)=>{
              this.setState({
                search:search,
              })
            }}
            value = {this.state.search}
          >
          </SearchBar>
          <TouchableOpacity onPress = {()=>{this.searchByFilter('storyAuthor')}} style = {{padding:5, alignSelf:'center', marginTop:5, backgroundColor:'limegreen', width:115}}>
            <Text style = {{color:'white'}}>Search By Author</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>{this.searchByFilter('storyTitle')}}  style = {{padding:5, alignSelf:'center', marginTop:5, backgroundColor:'limegreen', width:115}}>
            <Text style = {{color:'white', alignSelf:'center'}}>Search By Title</Text>
          </TouchableOpacity>
          <FlatList
            data = {this.state.allEntries}
            renderItem = {
              ({ item })=>{
                //console.log(item);
                return(
                  <View style = {{marginTop:10}}>
                    <Text style = {{fontSize : 10, color:'white'}}>{'storyAuthor: '+item.storyAuthor}</Text>
                    <Text style = {{fontSize:10, color : 'white'}}>{'storyTitle: '+item.storyTitle}</Text>
                  </View>
                )
              }
            }
            keyExtractor = {
              (item,index)=>{
                return index.toString();
              }
            }

            onEndReachedThreshold = {0.7}

          ></FlatList>
          <Text style = {{color:'white',}}>{this.state.searchWhere + this.state.search}</Text>
        </View>
      )
    }
}  