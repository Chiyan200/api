import React,{ useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, ScrollView , TouchableOpacity,SafeAreaView} from 'react-native';
// import { Colors  , backgroundColor} from 'react-native/Libraries/NewAppScreen';
import Own from './ownMethod'

const Api=()=>{

const route =useRoute()
   
  return( 
   
  <SafeAreaView style={styles.apiFullView}>
       
      <Text style={styles.bodyContent}> id :{route.params.post}</Text>
      <Text style={styles.ApiTitle}>Title: {route.params.head}</Text>
      <Text style={styles.ApiTitle}>body: {route.params.body}</Text>
      
   </SafeAreaView>
)
}
const styles = StyleSheet.create({
   
   ApiTitle:{
      color:'#FF0000',
      fontSize:30,
      padding:10
   },

   bodyContent:{
      color:'#FF0000',
      padding:10,
      fontSize:30
   },

   apiFullView:{
      backgroundColor:"black",
      padding:10,
      
   }

 });

export default Api;