import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './src/screen/register';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
<stack.Navigator>

<stack.Screen name="Register" component={Register} />

</stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
