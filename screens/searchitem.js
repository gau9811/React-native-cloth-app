import React from 'react';
import {  View ,Text,Alert} from 'react-native';
import {Item, Input, Icon,Button,Header} from 'native-base'

export default class SearchengineScreen extends React.Component {


 
   static navigationOptions={
     header:null,  
     headerMode:"none"
   }


  constructor(props){
    super(props)
    this.state = {
      text:""
    }
  }

  searchlist = () =>{
  if(this.state.text){
     return this.props.navigation.navigate("product")
  }else{
    Alert.alert(
      'No such text has been filled',
      `There is no such ${this.state.text}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
    
  }
}  
  

  render(){
      return(
    <View>  
       <Header searchBar rounded 
        style={{ width:400,
               alignSelf:"center",
               backgroundColor:"#fff",
               borderRadius:25,
               height:30,
               marginBottom:20,
               marginTop:50}}
            >
             <Item>
               <Icon name="ios-search" />
               <Input placeholder="Search..." 
                onChangeText={(text)=>this.setState({text:text})}   
              />
             </Item>
           </Header>
           <Text style={{marginLeft:100,fontWeight:"bold",fontSize:20}}>{this.state.text}</Text>
        <Button style={{width:100,backgroundColor:"#0A79DF",marginTop:10,alignSelf:"center",borderRadius:25}}
        onPress={this.searchlist}
        >
               <Text style={{marginLeft:28,color:"#fff"}}>Search</Text>
        </Button>
    </View> 
      )
  }
}

