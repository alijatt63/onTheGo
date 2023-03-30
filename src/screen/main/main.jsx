import {View,Text,Image,FlatList} from "react-native"
import { Button } from "../../component/button";
import { removeIsUserLoggedIn } from "../../utils/help";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/fireBaseConfig";

function Main({navigation}){

    const attemptToLogout=()=>{
        removeIsUserLoggedIn();
        navigation.replace("Login");


    }
    const toLogin=()=>{

        navigation.navigate("Login");
    }
const [users,setUsers]=useState();

useEffect(()=>{
const scrapData=[];
getDocs(collection(db,"users")).then((response)=>{
    response.forEach((doc)=>{
        scrapData.push(doc.data());
    })
    setUsers(scrapData);
}).catch((error)=>{alert(error.message)})

},[])

const renderItems=({item})=>{
<View style={{padding:10,margin:10,flexDirection:"row"}}>


<Image  style={{width:100,height:100,borderRadius:50,margin:5}} src={item.profileImage} />

<View>
        <Text style={{ fontSize: 20 }}>{item.firstName}</Text>
        <Text style={{ fontSize: 20 }}>{item.lastName}</Text>
        <Text style={{ fontSize: 20 }}>{item.email}</Text>
      </View>

</View>

}

return(
<View style={{justifyContent:"center",flex:1}}>

<Text>Main Page</Text>
<FlatList data={users} renderItem={renderItems} />
<View style={{flexDirection:"row"}}>

<Button primary title={"Log Out"} onPress={attemptToLogout} />
<Button primary title={"Login"} onPress={toLogin} />
</View>

</View>




)



}
export{Main}