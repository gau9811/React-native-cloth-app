import * as firebase from 'firebase'



// Import screens from Auth
import loginScreen from './Auth/login'
import SignupScreen from './Auth/signup';
import LoadScreen from './Auth/loadScreen'
import SignoutScreen from './Auth/signout'
// Import screens from screens
import HomeScreen from './screens/Home'
import ViewbtnScreen from './screens/viewbtn'
import ViewAllScreen from './screens/ViewAll'
import BarcodeScanScreen from './screens/barcodeScan'

// Import section from Sections
import AddNewProduct from './Sections/addnewProduct.js'
import ProductScreen from './Sections/product.js'
import ViewAddProductScreen from './Sections/Viewaddedproduct'
import SearchengineScreen from './screens/searchitem'
//import paymentsoption using paypal
import paymentScreen from './payments/paymentOption'
 
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVGack25JOUxTc49sj0agxVsF7g_bQPV0",
  authDomain: "react-73316.firebaseapp.com",
  databaseURL: "https://react-73316.firebaseio.com",
  projectId: "react-73316",
  storageBucket: "react-73316.appspot.com",
  messagingSenderId: "332082709758",
  appId: "1:332082709758:web:11b25d99e79c9054d191af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





// the 
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Signup: { screen: SignupScreen },
    login: { screen: loginScreen },
    load:{screen:LoadScreen},
    add:{screen:AddNewProduct},
    view:{screen:ViewbtnScreen},
    product:{screen:ProductScreen},
    ViewProduct:{screen:ViewAddProductScreen},     
    Viewall:{screen:ViewAllScreen},
    signout:{screen:SignoutScreen},
    Bar:{screen:BarcodeScanScreen},
    search:{screen:SearchengineScreen},
    payment:{screen:paymentScreen}
  },{
    initialRouteName:"load"
  },
  {
     defaultNavigationOption:{
     header:null
   }
 }
) 

export default createAppContainer(AppNavigator);