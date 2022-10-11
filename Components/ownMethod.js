import React,{ useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, ScrollView , TouchableOpacity} from 'react-native';


const Own=({navigation})=>{



    const [data, setData]=useState([])
    const [loading ,setLoading]=useState(true)
   
    const [name,SetName]=useState("")
   
    const url="https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
       fetch(url)
       .then(response => response.json())
       .then(json => setData(json))
       .finally(()=> setLoading(false));
    })

  
   

    return(
        <ScrollView>

            <Text style={styles.heading}>Scroll View Api list</Text>


             {loading ? (<Text style={styles.txta}>loading..</Text>):(
                data.map((posts)=>(
                   

                 <View style={styles.Card} >
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate("Api",{
                        post:posts.id,
                        head:posts.title,
                        body:posts.body
                    }
                    
                    )}}

                     >
                     <Text 
                        style={styles.txta} key={posts.id} >

                            id : {posts.id}{'\n'}{'\n'}
                            Title:  {posts.title}{'\n'}{'\n'}
                            Body:  {posts.body} 
                            
                        </Text>
                      
                    </TouchableOpacity>
                </View> 
                ))
             )}  

             
        </ScrollView>
    )

}




const styles = StyleSheet.create({
    txta:{
        color:'white',
        padding:15,
        margin:20,
        borderRadius: 10,
        fontWeight:'700',
        backgroundColor:'#7289DA',
        alignItems:'center',
        
    
    },

      Card:{
       backgroundColor:'#424549'
        
      },
      heading:{
        color:'#7289da',
        marginTop:30,
        padding:10,
        fontSize:70,
        fontWeight:'400',
        backgroundColor: '#424549',

      }
    
    
  });

export default Own;