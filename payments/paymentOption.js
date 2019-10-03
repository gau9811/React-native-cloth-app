import React from 'react';
import { StyleSheet, View ,Text,Linking} from 'react-native';
import {Button} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
export default class paymentScreen extends React.Component {


  constructor(props){
    super(props)
     this.state = {
      showModal:false,
  }
} 


  
 _handleOpenWithLinking = () => {
    Linking.openURL("http://localhost:3000/")
  }
  
 
render(){ 
 return (
   <View>
    <Button
    transparent
    rounded
    bordered
    style={{alignSelf:"center",marginTop:"60%",padding:10,borderColor:"#000"}}
     visible={this.state.showModal}
     onRequestClose={() => this.setState({showModal:false})}
     onPress={this._handleOpenWithLinking}
     >
     <Ionicons name="md-card" style={{marginRight:3}}  size={15}/>
     <Text>Pay with Paypal</Text>    
    </Button>   
   </View>
  )
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
