import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase'

export default class LoadScreen extends React.Component {

static navigationOptions={
    title:"Loading",
    header:null
}

componentDidMount(){
    firebase.auth().onAuthStateChanged((authenticate)=>{
      if(authenticate){
          this.props.navigation.replace("Home")
      }else{
          this.props.navigation.replace("Signup")
      }
    })
}

    render(){
    return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000"></ActivityIndicator>
    </View>
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