import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from 'expo-barcode-scanner';
import {Button} from 'native-base'
export default class BarcodeScanScreen extends React.Component {


   static navigationOptions={
     header:null,
     headerMode:"none"
   }

 
   constructor(props){
    super(props)   
   this.state={
    hasPermissionCamera:null,
    scanned:false
   }
   
}
    componentDidMount(){
        this.getPermission()
    }


   componentWillUnmount(){
    this.state={
      hasPermissionCamera:null,
      scanned:false
   }
}
    getPermission = async()=>{
        const {status} = await  Permissions.askAsync(Permissions.CAMERA)
        this.setState({hasPermissionCamera: status === 'granted'})
      }
      
    handleBarCodeScanned =  async({ type, data }) => {
          await this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
  
      render() {
        const { hasCameraPermission, scanned } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={{height:1000}}
            />
           
            {scanned && (
              <Button full transparent bordered  onPress={() => this.setState({ scanned: false })} > 
              <Text>Tap to scan again</Text>
            
            </Button>
             )}
          </View>
        );
      }
    
    
    }
