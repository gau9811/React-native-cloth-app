
import React from 'react';
import { StyleSheet, View ,Text,ImageBackground} from 'react-native';
export default class ViewAllScreen extends React.Component {


 
   static navigationOptions={
     header:null,
     headerMode:"none"
   }


   
  render(){ 
  return (

<ImageBackground  style={{width:"100%" ,height:"100%",opacity:0.8}}  source={require('../assets/model8.jpg')}>
  <View style={styles.container}>
   <View>
     <Text style={{fontSize:60}}>CLOTH</Text>
   </View>
    <View style={{alignSelf:"center"}}>
     <Text  style={{fontSize:30,fontStyle:"italic"}}onPress={()=>{this.props.navigation.navigate("Home")}}>MEN</Text>
    </View> 
    <View style={{falignSelf:"center"}}>
     <Text  style={{fontSize:25,fontStyle:"italic"}} onPress={()=>{this.props.navigation.navigate("Home")}}>WOMEN</Text>
    </View> 
    <View style={{alignSelf:"center"}}>
     <Text  style={{fontSize:20,fontStyle:"italic"}} onPress={()=>{this.props.navigation.navigate("Home")}}>KIDS</Text>
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
    alignItems:"center",
   justifyContent:"center"
  
  },
 
});
