import React, { Component } from "react";
import {
  View,
  StyleSheet, 
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";

import uuid from "uuid";

import { Form, Item, Input, Label, Button } from "native-base";


import * as ImagePicker from 'expo-image-picker'

import { Header } from "react-navigation-stack";


import * as firebase from "firebase";

export default class AddNewProduct extends Component {
  static navigationOptions = {
   
    header:null,
    headerMode:"none"
  };
 
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: "",
      size: "",
      color: "",
      description:"",
      image: "empty",
      imageDownloadUrl: "empty",
      isUploading: false
    };
  }

  saveProduct = async () => {
   
    if (
      this.state.title !== "" &&
      this.state.price !== "" &&
      this.state.color !== "" &&
      this.state.size !== ""  &&
      this.state.description !== ""      
    ) {
      this.setState({ isUploading: true });
      const dbReference = firebase.database().ref();
      const storageRef = firebase.storage().ref();

      if (this.state.image !== "empty") {
        const downloadUrl = await  this.uploadImageAsync(
          this.state.image,
          storageRef
        );
        this.setState({ imageDownloadUrl: downloadUrl });
      }


      var product = {
        title: this.state.title,
        price: this.state.price,
        color: this.state.color,
        size: this.state.size,
        description:this.state.description,
        imageUrl: this.state.imageDownloadUrl
      };

      await dbReference.push(product, error => {
        if (!error) {
          return this.props.navigation.goBack();
        }
      });
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.2,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1]
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  //TODO: upload image to firebase
  uploadImageAsync = async (uri, storageRef) => {
    const parts = uri.split(".");
    const fileExtenstion = parts[parts.length - 1];

    //create blob
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    // upload image
    const ref = storageRef
      .child("ProductImages")
      .child(uuid.v4() + "." + fileExtenstion);
    const snapshot = await ref.put(blob);

    //close blob
    blob.close();
    return await snapshot.ref.getDownloadURL();
  };

  //render method
  render() {
    if (this.state.isUploading) {
      return (
        <View
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#0000000" />
          <Text style={{ textAlign: "center" }}>
            Product Uploading please wait..
          </Text>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 20} 
        style={{ flex: 1 }}
        behavior="padding"
      >
        <TouchableWithoutFeedback
          onPress={() => {
           
            Keyboard.dismiss();
          }}
        >
          <ScrollView style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.pickImage();
              }}
            >
              <Image
                source={
                  this.state.image === "empty"
                    ? require("../assets/person.jpg")
                    : {
                        uri: this.state.image
                      }
                }
                style={styles.imagePicker}
              />
            </TouchableOpacity>

            <Form>
              <Item style={styles.inputItem} floatingLabel>
                <Label>title</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={title => this.setState({ title })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>price</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={price => this.setState({ price })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>color</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={color => this.setState({ color })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>size</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={size => this.setState({ size })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>description</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={description => this.setState({ description })}
                />
              </Item>
            </Form>

            <Button bordered 
              style={styles.button}
              full
              rounded
              onPress={() => {
                // save contact
                this.saveProduct();
              }}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Button>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  },
  imagePicker: {
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    marginTop:20
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 40,
    borderColor:"black"
  },
  buttonText: {
    color: "black",
    fontWeight: "bold"
  }
});


