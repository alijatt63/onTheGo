import { StyleSheet } from "react-native";
import { colors, genericStyles } from "../../theme/designSystem";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 5,
    flex: 1,
  },
  formCon: {
    marginTop:100,
    alignItems:"center",
    flex: 0.5,
  },
  bottomCon: {
    flex: 0.5,
  },
  form: {
    marginTop:-20,
    padding: 10,
  },
  inputCon: {
    ...genericStyles.inputBase,
    marginVertical: 10,
  },
});

export { Styles };
