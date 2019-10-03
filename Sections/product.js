import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
  ScrollView,

} from "react-native";

import { Card } from "native-base";

import { Entypo } from "@expo/vector-icons";


import * as firebase from "firebase";

export default class ProductScreen extends React.Component {
  static navigationOptions = {

   title:"CLOTH"
  };
 

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      isListEmpty: false
    };
  }
  // lifecycle method
  componentWillMount() {
    this.getAllProduct();
  }
  componentWillUnmount(){
    this.unloadProduct()

  }

  unloadProduct = () =>{
     this.state = {data:[],isLoading:true,isListEmpty:false}
  }


  // getAllProduct method
  getAllProduct = () => {
    let self = this;
    //TODO: get all Product from firebase
    let ProductRef =  firebase.database().ref();
    //FIX: Snapshot
    ProductRef.on("value", dataSnapshot => {
      if (dataSnapshot.val()) {
        let ProductResult = Object.values(dataSnapshot.val());
        let ProductKey = Object.keys(dataSnapshot.val());
        ProductKey.forEach((value, key) => {
            ProductResult[key]["key"] = value;
        }); self.setState({
          data: ProductResult.sort((a, b) => {
            var nameA = a.title.toUpperCase(); 
            var nameB = b.title.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          }),
          isListEmpty: false
        });
      } else {
        self.setState({ isListEmpty: true });
      }
      self.setState({ isLoading: false });
    });
   
  };

  
  render() {
  
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#000000" />
          <Text style={{ textAlign: "center" }}>
          Product loading please wait..
          </Text>
        </View>
      );
    } else if (this.state.isListEmpty) {
  
      return (
        <View
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <Entypo style={{ alignSelf: "center" }} name="plus" size={35} />
          <Text style={{ textAlign: "center" }}>No product please Add a product </Text>
          <TouchableOpacity
            onPress={() => {
           
              this.props.navigation.navigate("Add");
            }}
            style={styles.floatButton}
          >
            
          </TouchableOpacity>
        </View>
      );
    }
   
    return (
    <ScrollView> 
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
               
                  this.props.navigation.navigate("ViewProduct", {
                    key: item.key
                  });
                }}
              >
                <Card style={styles.listItem} >
                 
                    <Image
                      
                      style={{height:500,width:"100%"}}
                      source={
                        item.imageUrl === "empty"
                          ? require("../assets/person.jpg")
                          : { uri: item.imageUrl }
                      }
                    />
                  
                </Card>
                <View style={styles.infoContainer}>
                     <Text style={styles.infoText}>
                         {item.title} 
                      </Text>
                </View>
                 <View style={styles.infoContainer}>
                     <Text style={styles.infoText}>
                        {item.price}
                     </Text>
                 </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
   </ScrollView>   
    );
  }
}
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listItem: {
    flexDirection: "row",
    padding: 2,
  },
  infoContainer: {
    flexDirection: "column"
  },
  infoText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 2,
    alignSelf:"center",
    fontStyle:"italic"
  },
 
});