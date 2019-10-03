import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import * as firebase from 'firebase'
import {Button} from 'native-base'

export default class SignoutScreen extends React.Component {

static navigationOptions={
    title:"Loading",
    header:null
}

constructor(props){
   super(props)
   this.state = {
       email:"",
       name:"",
     }
}



componentDidMount(){
  firebase 
  .auth()
  .onAuthStateChanged(authenticate =>{
      if(authenticate){
          this.setState({
              email:authenticate.email,
              name:authenticate.displayName
          })
      }else{
          this.props.navigation.replace("login")
      }
  })
}

componentWillUnmount(){
  this.state = {
    email:"",
    name:"",
  }
}
signOut = () =>{
  firebase
  .auth()
  .signOut()
  .then(()=> () =>{
      console.log("signout")
  })
  .catch(error => alert(error.message))
}



    render(){
    return (
       <ImageBackground  style={{width:"100%" ,height:"100%",opacity:0.7}}  source={require('../assets/model10.jpg')}>
   <View style={styles.container}>
   <View>
      <Text style={{fontSize:60}}>CLOTH</Text>
   </View>
      
        <View>
            <Text style={{fontSize:15 ,fontStyle:"italic"}}>
               Hey {this.state.name} happy to See you
            </Text>
            <Text style={{fontSize:15 ,fontStyle:"italic"}}>
               Your emailID is {this.state.email} 
            </Text>
        </View>
        <View>
           <Button 
           style={{marginTop:20 ,padding:10 ,borderColor:"black"}}
           transparent
           bordered
           onPress={this.signOut}
           >
           <Text>SignOut</Text>
           </Button>    
       </View>   
   </View>
 </ImageBackground> 
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});