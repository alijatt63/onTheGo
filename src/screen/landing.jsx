import React,{useEffect,useState,useRef} from "react";
import { ScrollView,Button, TextInput, View, StyleSheet,TouchableOpacity,Image} from "react-native";



function Landing(){




return(


<ScrollView style={style.container}>

<View style={style.form}>




</View>

<View style={style.bottomBox}>






</View>


</ScrollView>



)



}

export {Landing};

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
        height: 250,
       

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