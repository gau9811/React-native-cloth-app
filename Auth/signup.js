import React from 'react';
import { StyleSheet, Text, View,ImageBackground,KeyboardAvoidingView} from 'react-native';
import *  as firebase from 'firebase'
import {Form,Item,Label,Input,Button} from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class SignupScreen extends React.Component {

  static navigationOptions = {
  header:null,
  headerMode:"none"

  }
   
  constructor(props){
      super(props)
     this.state={
         name:"",
         phoneNo:"",
         email:"",
         password:"",
     
     } 
  }
 
  signupUser = (name,email,password,phoneNo) =>{
      firebase 
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(authenticate => {
          return authenticate.user
          .updateProfile({
              displayName:name,
              PhoneNumber :phoneNo,
          })
          .then(()=>{
              this.props.navigation.replace("Home")
          })
      }).catch(err => {
          alert(err.message);
        })

   }


render(){
return (
   <ImageBackground source={require('../assets/cloth.jpg')} style={{width:"100%" ,height:"100%",opacity:0.6}} >
   <KeyboardAvoidingView 
   styles={styles.container}
    behavior="position" enabled
   >
     <View>
         <Text style={{fontSize:60,color:"#000",alignSelf:"center" , marginTop:100}}>CLOTH</Text>
     </View>  
     <Form  style={styles.form}>  
     <Item floatingLabel>
             <Label style={{color:"#000"}}>Name</Label>

             <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={name =>this.setState({name})}
             />
         </Item>
     <Item floatingLabel>
             <Label style={{color:"#000"}}>Phone no</Label>

             <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="decimal-pad"
              onChangeText={phoneNo =>this.setState({phoneNo})}
             />
         </Item>
         <Item floatingLabel>
             <Label style={{color:"#000"}}>email</Label>

             <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={email =>this.setState({email})}
             
             />
         </Item>
       <Item floatingLabel>
             <Label style={{color:"#000"}}>Password</Label>

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
    bordered dark
   
     style={{width:100,alignSelf:"center"}}
        
         onPress={()=>{
             this.signupUser(
                 this.state.name,
                 this.state.email,
                 this.state.password,
                 this.state.phoneNo
             )
         }}
         >
          <Text style={styles.buttonText}>Sign Up</Text>
         </Button> 
  
    <TouchableOpacity
     onPress={()=> {
       this.props.navigation.navigate("login")
    }}>
      <Text  style={{color:"#000",alignSelf:"center",marginTop:10}}>Back to login</Text>
    </TouchableOpacity>
   </KeyboardAvoidingView>
</ImageBackground>
);
}
}


const styles = StyleSheet.create({
container: {
 flex: 1,
 backgroundColor: "#fff"
},
form: {
 padding: 20,
 width: "100%",
 marginTop:80
},
btn: {
 marginTop: 20,
 width:50
},
buttonText: {
 color: "#000",
 alignSelf:"center",
 marginLeft:22,
 

},
footer: {
 alignItems: "center"
},
btn:{
padding:10,

},
txt:{
   color:"#fff",
   
},
tt:{
   margin:5,
   
}
});