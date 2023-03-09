import { TouchableOpacity,Text, StyleSheet} from "react-native";
import React from "react";
import { colors } from "../theme/designSystem";

function Button({primary,outline,title,onPress}){

return(
<TouchableOpacity
onPress={onPress}
style={
    primary===true 
    ? styles.primary 
    : outline===true
    ?styles.outlineButton
    :styles.primary
}
>
<Text style={primary
    ?styles.btnText
    :outline
    ?styles.outlineText
    :styles.primary
    }>


{title}

</Text>


</TouchableOpacity>
);
}

const base={
backgroundColor: colors.primary,
borderRadius: 10,
borderWidth: 1,
padding:10,
alignItems: "center",
marginVertical: 0,
margin:20,
flex:0.5,
borderColor: colors.accent,

};

const styles=StyleSheet.create({
primary:{
    ...base
},
btnText:{
    color:colors.white
},
outlineButton:{
...base,
backgroundColor: colors.secondary,

},
outlineText:{

    color:colors.primary
}

})
export{Button};