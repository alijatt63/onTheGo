import React,{useEffect,useState,useRef} from "react";
import { ScrollView,Button, TextInput, View, StyleSheet,TouchableOpacity,Image} from "react-native";
import * as EmailValidator from "email-validator";
import { Camera, CameraType, requestPermissionsAsync } from "expo-camera";


function Register(){

const [isValid,setIsValid]=useState(false);
const [lastName,setLastName]=useState("");
const [firstName,setFirstName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const onPressSubmit=()=>{
alert(" Your Form is Valid")
};

const [type,setType]=useState(CameraType.front);
const [permisiion,requestPermission]=Camera.useCameraPermissions();
requestPermission();


useEffect(()=>{


    checkValidForm()}, [email,firstName,lastName,password,confirmPassword])

const checkValidForm=()=>{

if(email===""){
setIsValid(false)
return
}
if(firstName===""){
setIsValid(false)
return
}
 if(lastName===""){
setIsValid(false)
return
}
if(password===""){
setIsValid(false)
return
}
if(confirmPassword===""){
setIsValid(false)
return
}
if(password !==confirmPassword){
setIsValid(false)
return
}
if(EmailValidator.validate(email)===false){
setIsValid(false)
return
}
setIsValid(true);
}


const cameraRef=useRef();
const [profilePicUri,setProfilePicUri]=useState("");
const onTakePic=()=>{

if(cameraRef.current===undefined){
    return;
}

cameraRef.current.takePictureAsync().then((response)=>{console.log(response);
if(response.uri !== undefined){
setProfilePicUri(response.uri)
}})
.catch((error)=>{
    alert(error.message);
});

}

return(


<ScrollView style={style.container}>
<Image style={style.profilePic} source={{ uri: profilePicUri }} />
<View style={style.form}>
<TextInput style={style.inputBox} onChangeText={setFirstName} placeholder="First Name"  />
<TextInput style={style.inputBox} onChangeText={setLastName} placeholder="Last Name"  />
<TextInput style={style.inputBox} onChangeText={setEmail} placeholder="Email"  />
<TextInput style={style.inputBox} onChangeText={setPassword} placeholder="Enter Password"  />
<TextInput style={style.inputBox} onChangeText={setConfirmPassword} placeholder="Confirm Your Password"  />

<Button title={'Submit'} onPress={onPressSubmit} disabled={isValid===false}></Button>

</View>

<View style={style.bottomBox}>
<Camera ref={cameraRef} style={style.camera} type={type}>
<TouchableOpacity onPress={onTakePic}>
<View style={style.cameraButton}>


</View>

</TouchableOpacity>


</Camera>

</View>


</ScrollView>



)



}

export {Register};

const style=StyleSheet.create({
    container:{

        flex:1,
        paddingTop:50
    },

    form:{
flex:0.8,
padding:10,
    },
    inputBox:{
padding:10,
borderWidth:1,
margin:5,
borderRadius:10


    },
    bottomBox:{

        flex:0.2,
        margin:10,
         marginBottom:40,
         
    },
    camera:{
        width:"100%",
        height: 150,
       

    },

cameraButton:{

    width:30,
    height:30,
    margin:20,
    borderRadius:50,
    backgroundColor:"white"
},
profilePic:{
width:100,
height:100,
margin:5,
borderRadius:100,
alignSelf:"center"

}







})