import React,{useEffect,useState} from "react";
import { Button, TextInput, View, StyleSheet} from "react-native";
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
return(


<View style={style.container}>
<View style={style.form}>
<TextInput style={style.inputBox} onChangeText={setFirstName} placeholder="First Name"  />
<TextInput style={style.inputBox} onChangeText={setLastName} placeholder="Last Name"  />
<TextInput style={style.inputBox} onChangeText={setEmail} placeholder="Email"  />
<TextInput style={style.inputBox} onChangeText={setPassword} placeholder="Enter Password"  />
<TextInput style={style.inputBox} onChangeText={setConfirmPassword} placeholder="Confirm Your Password"  />

<Button title={'Submit'} onPress={onPressSubmit} disabled={isValid===false}></Button>

</View>
<View style={style.bottomBox}>
<Camera style={style.camera} type={type}></Camera>

</View>


</View>



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










})