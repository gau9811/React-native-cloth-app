import React from 'react';
import { StyleSheet, Text, View ,Alert,KeyboardAvoidingView ,TouchableWithoutFeedback,ImageBackground,TouchableOpacity} from 'react-native';
import *  as firebase from 'firebase'
import {Form,Item,Label,Input,Button} from 'native-base'
import {Entypo} from '@expo/vector-icons'


export default class loginScreen extends React.Component {
 
static navigationOptions = {
  header:null,
  headerMode:"none"

}

  


 constructor(props){
   super(props)
   this.state = {
     email: "",
     password:"",

   }
 }
 
   login = (email,password) =>{
       firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() =>this.props.navigation.replace("Home"))
      .catch(err => {
        console.log("Authentication failed" + err)
      })
       
      
   }



  render(){ 
  return (

  <TouchableWithoutFeedback>
    <ImageBackground style={{width:"100%" ,height:"100%",opacity:0.8}}  source={require('../assets/Cloth.jpg')}>
  <KeyboardAvoidingView 
    styles={styles.container}
     behavior="padding" enabled
     >
       <View style={styles.txt}>
         <Text style={styles.head}>CLOTH</Text>
      </View>
      <Form  style={styles.form}>  
         <Item floatingLabel>
             <Label style={{color:"#fff"}}>email</Label>

             <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={email =>this.setState({email})}
              color="white"
             />
         </Item>
       <Item floatingLabel>
             <Label style={{color:"#fff"}}>Password</Label>

             <Input
             secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={password =>this.setState({password})}
             />
         </Item>
      
     </Form>
     <Button 
     style={styles.btn}
     bordered light
     onPress={()=>{
       this.login(this.state.email,this.state.password)
     }}
     >
     <Text style={styles.btntxt}>log in</Text>
     </Button>
     
     <View style={styles.footer}>
        <Text style={{alignSelf:"center", marginTop:10, color:"white"}}>OR</Text>
      <TouchableOpacity onPress={() => {
               this.props.navigation.navigate("Signup")
      }} >
      <Text style={{color:"white",marginTop:10}}>Create a new account</Text>
     
    </TouchableOpacity>  
    </View>

 
  
   </KeyboardAvoidingView>
   </ImageBackground>
   </TouchableWithoutFeedback>
  
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    
  },
  form: {
    
    padding: 20,
    width: "100%",
    marginTop:100,
    alignSelf:"center",
  
  },

  txt:{
   marginTop:100,
   alignSelf:"center",
   
  },
  head:{
    fontSize:60,
    color:"white",

  },
  btn:{
   marginTop:10,
    width:100,
    alignSelf:"center",

  },

  btntxt:{
   color:"white",
   paddingLeft:24,
   fontSize:20
  },
  footer:{
    alignSelf:"center"
  },
  foot:{
   alignSelf:"center"
  },
 
  

});
