import React,{ useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Api from './Components/apiShow';
import Own from './Components/ownMethod';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Own'>

        <Stack.Screen name='Own' component={Own}/>
        <Stack.Screen name='Api' component={Api}/>

      </Stack.Navigator>
     </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:30,
//     backgroundColor: '#424549',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   heading:{
//     color:'#7289da',
//     marginTop:30,
//     padding:10,
//     fontSize:70,
//     fontWeight:'400'
//   },

//   txt:{
//     color:'white',
//     padding:10,
//     margin:10,
//     backgroundColor:'#D2DAFF',
//     borderRadius: 10,
//   },

//   txtT:{
//     color:'black',
//     backgroundColor:'#B1B2FF',
//     padding:10,
//     margin:10,
//     borderRadius: 10,
//   },
  
// });
