import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Landing } from "../screen/landing";
import { Login } from "../screen/login/login";
import { Register } from "../screen/register/register";
import { Main } from "../screen/main/main";


function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      > 
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigator };
