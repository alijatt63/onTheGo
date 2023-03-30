import { useState,useEffect} from "react";
import {Image, TextInput,Text, View, TouchableOpacity} from "react-native";
import { Button } from "../../component/button";
import { colors } from "../../theme/designSystem";
import { Styles } from "./login_Style";
import Spinner from "react-native-loading-spinner-overlay";
import { getIsUserLoggedIn, saveIsUserLoggedIn, saveUserUid} from "../../utils/help";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/fireBaseConfig";


function Login({navigation}) {

useEffect(()=>{
getIsUserLoggedIn().then((response)=>{
if(response==="true"){

  navigation.replace("Main")
}


});


},[])

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [loading, setLoading] = useState(false);

const loginPress=()=>{
console.log(`username: ${email}, password: ${password} `)
alert(`username: ${email} & password: ${password}`);
}
const registerPress=()=>{
  
  navigation.navigate("Register");
}
const forgetPress=()=>{
  alert('oh, Sorry For that')
}



const attemptLogin=()=>{

  setLoading(true);
  signInWithEmailAndPassword(auth,email,password).then((response)=>{
    const user=response.user;
    const uid=user.uid;

    saveIsUserLoggedIn();
    saveUserUid(uid);
    setLoading(false);
    navigation.replace("Main"); 

  }).catch((error)=>{
    alert(error.message);
    setLoading(false);
  })

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
           onChangeText={text => setEmail(text)}
          value={email}
           />
          <TextInput placeholder="Enter your password" placeholderTextColor={colors.secondary} style={Styles.inputCon} secureTextEntry
          onChangeText={text=> setPassword(text)}
          value={password}
          />
        </View>
      
        <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
          <Button outline title={"Signin"} onPress={attemptLogin}/>
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
      <Spinner visible={loading} textContent={"Loading..."} />
    </View>

  );
}

export { Login };