import { StatusBar } from "expo-status-bar";
import { AppNavigator } from "./src/navigation/appNavigator";
import { SafeAreaView,View } from "react-native";
export default function App() {
  return (
    <>   
       <SafeAreaView />
      
      <AppNavigator />
      
      </>

  );
}
