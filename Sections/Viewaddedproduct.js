import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions
} from "react-native";
import { Card, CardItem ,Button} from "native-base";
import * as firebase from "firebase";

export default class ViewAddProductScreen extends Component {
  static navigationOptions = {
    title: "CLOTH"
  };

  constructor(props) {
    super(props);

    this.state = {
      title: null,
      price: null,
      size: null,
      color: null,
      description: null,
      imageUrl: null,
      key: null,
      isLoading: true
    };
  }

  componentDidMount() {
    let key = this.props.navigation.getParam("key", "");
    this.getProductdetails(key);
  }

  componentWillUnmount(){

    this.state = {
      title: null,
      price: null,
      size: null,
      color: null,
      description: null,
      imageUrl: null,
      key: null,
      isLoading: true
    };
  }

  getProductdetails = async key => {
    let self = this;
    let ProductRef = firebase
      .database()
      .ref()
      .child(key);

    await ProductRef.on("value", dataSnapshot => {
 
      if (dataSnapshot.val()) {
        ProductRef= dataSnapshot.val();
        self.setState({
          title: ProductRef.title,
          price: ProductRef.price,
          size: ProductRef.size,
          color: ProductRef.color,
          description: ProductRef.description,
          imageUrl: ProductRef.imageUrl,
          key: key,
          isLoading: false
        });
      }
    });
  };

  
  
  
  render() {
  
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size="large" color="#01CBC6" />
          <Text style={{ textAlign: "center" }}>
            Product loading please wait..
          </Text>
        </View>
      );
    }
   
    return (
      <ScrollView style={styles.container}>
        <View style={styles.productIconContainer}>
          <Image
            style={styles.productIcon}
            source={
              this.state.image === "empty"
                ? require("../assets/person.jpg")
                : {
                    uri: this.state.imageUrl
                  }
            }
          />
        </View>
      <View style={{marginTop:10 ,marginLeft:8}}>
         <Text style={{fontSize:30 , fontStyle:"italic"}}>{this.state.title}</Text>  
      </View>
      <View style={{marginTop:5 ,marginLeft:8}}>
         <Text style={{fontSize:20 ,fontStyle:"italic" }}>{this.state.price}</Text>  
       </View>  
      <View style={{marginTop:5 ,marginLeft:8}}>
    <Button 
     style={styles.btn}
     bordered light
     onPress={()=>{
       this.props.navigation.navigate("payment")
     
     }}
     >
     <Text style={styles.btntxt}>Buy</Text>
     </Button>
      </View>
      <View style={{marginTop:15 ,alignSelf:"center"}}>
        <Card style={{width:350}}>
        <Text  style={{fontSize:20,fontStyle:"italic",marginTop:4,marginLeft:12}}>Description</Text> 
           <CardItem bordered>
               <Text  style={{fontSize:15,fontStyle:"italic" }}>{this.state.description}</Text>
           </CardItem>
        </Card>
       </View>      
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  productIconContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  productIcon: {
    
    height:500,
    width: Dimensions.get("window").width,
    marginTop:50

  },
  btn:{
   
     width:100,
     borderColor:"#000000",
     borderRadius:25,
     borderWidth:1,
     alignSelf:"center"
    },
 
   btntxt:{
    color:"#000000",
    paddingLeft:32,
    fontSize:20,
    alignItems:"center"
   },
});