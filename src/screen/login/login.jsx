import { useState,useEffect} from "react";
import {Image, TextInput,Text, View, TouchableOpacity} from "react-native";
import { Button } from "../../component/button";
import { colors } from "../../theme/designSystem";
import { Styles } from "./login_Style";
import Spinner from "react-native-loading-spinner-overlay";
import { getIsUserLoggedIn } from "../../utils/help";

function Login({navigation}) {

useEffect(()=>{
getIsUserLoggedIn().then((response)=>{
if(response==="true"){

  navigation.replace("Main")
}


})


})


const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const loginPress=()=>{
console.log(`username: ${username}, password: ${password} `)
alert(`username: ${username} & password: ${password}`);
}
const registerPress=()=>{
  
  navigation.navigate("Register");
}
const forgetPress=()=>{
  alert('oh, Sorry For that')
}

  return (
    
    <View style={Styles.container}>

      <View style={Styles.formCon}>
      <Image style={{width:180,height:220}}

        source={require("../../../assets/logo.png")}
      />  
      </View>
      
      <View style={Styles.bottomCon}>

      <View style={Styles.form }>
          <TextInput placeholder="Enter your username" placeholderTextColor={colors.secondary} style={Styles.inputCon}
           onChangeText={text => setUsername(text)}
          value={username}
           />
          <TextInput placeholder="Enter your password" placeholderTextColor={colors.secondary} style={Styles.inputCon} secureTextEntry
          onChangeText={text=> setPassword(text)}
          value={password}
          />
        </View>
      
        <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
          <Button outline title={"Signin"} onPress={loginPress}/>
        </View>
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        <TouchableOpacity onPress={registerPress}>        
          <Text style={{color:colors.primary,margin:10 }}>Create A New Account</Text>
        </TouchableOpacity>
        <Text style={{color:colors.primary,marginTop:10 }}>|</Text>
        <TouchableOpacity onPress={forgetPress}>        
          <Text style={{color:colors.primary, margin:10}}>Forget Password</Text>
        </TouchableOpacity>
       </View>
      
      </View>
       
    </View>

  );
}

export { Login };