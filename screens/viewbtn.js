import React from 'react';
import { StyleSheet, View ,Text,ImageBackground} from 'react-native';
export default class ViewbtnScreen extends React.Component {


 
   static navigationOptions={
     header:null,  
     headerMode:"none"
   }


   
  render(){ 
  return (


<ImageBackground  style={{width:"100%" ,height:"100%",opacity:0.8}}  source={require('../assets/model9.jpg')}>
  <View style={styles.container}>
   <View>
     <Text style={{fontSize:60}}>CLOTH</Text>
   </View>
     <Text style={{fontStyle:"italic",fontSize:30}} onPress={()=>{this.props.navigation.navigate("add")}}>Add your product</Text>
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
