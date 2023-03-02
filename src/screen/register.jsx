import React,{useEffect,useState} from "react";
import { Button, TextInput, View } from "react-native";
import * as EmailValidator from "email-validator";


function Register(){

const [isValid,setIsValid]=useState(false);
const [lastName,setLastName]=useState("");
const [firstName,setFirstName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const onPressSubmit=()=>{

}



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


<View>
<TextInput onChangeText={setFirstName} placeholder="First Name"  />
<TextInput onChangeText={setLastName} placeholder="Last Name"  />
<TextInput onChangeText={setEmail} placeholder="Email"  />
<TextInput onChangeText={setPassword} placeholder="Enter Password"  />
<TextInput onChangeText={setConfirmPassword} placeholder="Confirm Your Password"  />

<Button title={'Submit'} onPress={onPressSubmit} disabled={isValid===false}></Button>
</View>



)



}

export {Register};