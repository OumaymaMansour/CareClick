import React from 'react'
import { StyleSheet ,View, Text , Button , Image , TextInput , Pressable} from 'react-native';
function Signin({navigation}:any) {
  
  return (
    <View>
        
        
       
        <View>
        <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
        />
        <Text style={styles.name}>CareClick</Text>
        </View>
        <View >
        <Text style={styles.title} >Sign in to your account </Text>
        </View>
         <Text style={styles.Email}>Email</Text>
         <TextInput
         style={styles.input}
         value='ex@gmail.com'
         />
         <View style ={styles.container}>
         <Text style={styles.Email}>
          Password
         </Text>
         <TextInput
         style={styles.input}
         value='********'
         />
         </View>
         
         <Pressable 
      
       >
        <Text style={styles.button} > sign in </Text>

       </Pressable>
         <View style ={styles.position}>
       <Text style={styles.account}>
        Don't have an accout ?  <Pressable    onPress={()=>{navigation.navigate("Signup")}} ><Text style={styles.navigation}>sign up</Text></Pressable>
       </Text>
       </View>
         
        
         
        
    </View>
  )
}
export default Signin

const styles = StyleSheet.create({
  logo: {
   width : 150,
   height : 200 ,
   marginLeft : 130,
   marginTop : -30
  },
  title : {
    marginLeft : 50,
    marginTop: 10 ,
    fontSize : 25,
  },
  Email : {
    color : "grey",
    marginLeft : 20
  },
  name: {
    marginLeft : 80,
    marginTop : -80,
    color : "#F26268" , 
    fontSize : 20,
    paddingBottom : 60
  } , 
  input : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
     borderRadius : 20 , 
     width : 300 , 
      color : "grey"
  },
  container : {
marginTop : 30
  } , 
button : {
  backgroundColor : "#1DBED3",
  fontSize: 20 , 
  borderRadius : 10,
  textAlign : "center",
  width : 200,
  marginTop : 30 ,
  marginLeft : 60, 
  color : "#FFFFFF",
  fontStyle : 'italic',
  
}, 
container1 : {
  marginTop : 50
    },

 navigation : {
  color : "#1DBED3",
  fontSize : 20,
  
 } ,

 position : {
  marginTop : 20,
  marginLeft : 20
 },

 account : {
   color : "#888888",
   fontSize : 20,
 }

 
    
  });