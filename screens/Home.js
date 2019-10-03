import React from 'react';
import { StyleSheet, View ,Text,TouchableOpacity,ImageBackground,ScrollView,FlatList} from 'react-native';
import {Header,Item,Input,Icon,Footer,FooterTab,Button,Left} from 'native-base';
import {Ionicons} from '@expo/vector-icons'
export default class HomeScreen extends React.Component {


  static navigationOptions={
     header:null,
     headerMode:"none",
   
    }


  render(){ 
  return (
 
   <View style={styles.container}>
  <Left style={{marginTop:30}}>
   <Text style={{fontWeight:"bold",fontSize:25}}>CLOTH</Text>
  </Left>  
    <Header searchBar rounded
        style={{ width:300,
            alignSelf:"center",
            backgroundColor:"#fff",
            borderRadius:25,
            height:30,
            marginBottom:20,
            marginTop:40}}
        >
          <Item> 
            <Icon name="ios-search" />
          <Input
          placeholder="Search..."
          onResponderStart={()=>this.props.navigation.navigate("search")}

          />        
          </Item>
       
        
      </Header>
      <View>
      </View> 
         <Ionicons style={{alignSelf:"center",marginBottom:5}} name="md-barcode" size={25} color="black"  onPress={ () =>
              this.props.navigation.navigate("Bar")
             } />
            
  
  <ScrollView>
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate("product")}}>
      <View style={{flex:1 ,flexDirection:"row"}} >
          <ImageBackground   source={require('../assets/model2.jpg')} style={{width:"100%",height:500 ,marginTop:20 , alignItems: 'center', justifyContent: 'center' ,fontSize:30}}>
           <Text style={{color:"#fff", fontSize:30}}>MEN</Text>
          </ImageBackground>
     </View>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("product")}}>
      <View style={{flex:1 ,flexDirection:"row"}}>
         <ImageBackground source={require('../assets/model1.jpg')} style={{width:"100%",height:500 , alignItems: 'center',justifyContent: 'center',fontSize:30}}>
           <Text style={{color:"#fff", fontSize:30}}>WOMEN</Text>
         </ImageBackground>  
      </View>
    </TouchableOpacity> 
     
     <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("product")}}>
        <View style={{flex:1 ,flexDirection:"row"}}>
         <ImageBackground source={require('../assets/model3.jpg')} style={{width:"100%",height:500 , alignItems: 'center',justifyContent: 'center' }}>
              <Text style={{color:"#fff", fontSize:30}}>KIDS</Text>
          </ImageBackground>  
      </View>
    </TouchableOpacity>
     
    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("product")}}>
       <View style={{flex:1 ,flexDirection:"row"}}>
         <ImageBackground source={require('../assets/model5.jpg')} style={{width:"100%",height:500 , alignItems: 'center',justifyContent: 'center' }}>
            <Text style={{color:"#fff", fontSize:30}}>TRF</Text>
         </ImageBackground>  
       </View>
    </TouchableOpacity> 
      
     <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("product")}}>
         <View style={{flex:1 ,flexDirection:"row"}}>
            <ImageBackground source={require('../assets/model6.jpg')} style={{width:"100%",height:500 , alignItems: 'center',justifyContent: 'center' }}>
              <Text style={{color:"#fff" ,fontSize:30}}>DENIUM</Text>
            </ImageBackground>  
          </View>
     </TouchableOpacity> 
       
       
     <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("product")}}> 
       <View style={{flex:1 ,flexDirection:"row"}}>
         <ImageBackground source={require('../assets/model7.jpg')} style={{width:"100%",height:500 , alignItems: 'center',justifyContent: 'center' }}>
           <Text style={{color:"#fff", fontSize:30}}>SHOES & BAGS </Text>
         </ImageBackground>  
      </View>
    </TouchableOpacity>   
  </ScrollView>
      
      <Footer style={styles.footer}>
          <FooterTab style={{backgroundColor:"#fff"}}>
            <Button vertical onPress={()=>{this.props.navigation.navigate("view")}}>
            
              <Text>CORNER SHOPS</Text>
            </Button>
            <Button vertical
            onPress={ () =>
              this.props.navigation.navigate("Viewall")
            }
            >
              <Text>COLLECTIONS</Text>
            </Button>
            <Button vertical
             onPress={ () =>
              this.props.navigation.navigate("signout")
            }
            >
                <Text>MY ACCOUNT</Text>
            </Button>
          </FooterTab>
        </Footer> 
  </View>

   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  head:{
    width:280,
    alignSelf:"center",
    backgroundColor:"#fff",
    borderRadius:25,
    height:30,
    marginBottom:20,
    marginTop:30
  },
  row:{
    flexDirection:"row",
    color:"black",
    height:100
  },
  footer:{
    backgroundColor:"#fff"
  }
  
})
