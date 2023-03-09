import {Image, TextInput,Text, View } from "react-native";
import { Button } from "../../component/button";
import { colors } from "../../theme/designSystem";
import { Styles } from "./login_Style";

function Login() {
  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
      <Image style={{width:180,height:220}}

        source={require("D:/Project/onTheGo/assets/logo.png")}
      />  
      </View>
      <View style={Styles.bottomCon}>
      <View style={Styles.form }>
          <TextInput placeholder="Enter your username" style={Styles.inputCon} />
          <TextInput placeholder="Enter your password" style={Styles.inputCon} secureTextEntry/>
        </View>
        <Text style={color=colors.primary}>Create A New Account</Text>
        <View style={{flexDirection:"row",alignSelf:"center"}}>
          <Button outline title={"Signin"}/>
        </View>
      </View>
    </View>
  );
}

export { Login };