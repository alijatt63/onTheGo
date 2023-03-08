import { TextInput, View } from "react-native";
import { Styles } from "./login_Style";

function Login() {
  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
        <View style={Styles.form}>
          <TextInput placeholder="email" style={Styles.inputCon} />
          <TextInput placeholder="password" style={Styles.inputCon} />
        </View>
      </View>
      <View style={Styles.bottomCon}></View>
    </View>
  );
}

export { Login };