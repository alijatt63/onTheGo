import {View,Text} from "react-native"
import React from "react";
import { Button } from "../../component/button";

function Main(navigation){

    const attemptToLogout=()=>{
        removeIsUserLoggedIn();
        navigation.navigate("Login");


    }


return(
<View style={{justifyContent:"center",flex:1}}>

<Text>Main</Text>
<View style={{flexDirection:"row"}}>
<Button primary title={"Log Out"} onPress={attemptToLogout} />
</View>

</View>




)



}
export{Main}