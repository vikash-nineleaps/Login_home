import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import {createStackNavigator} from "@react-navigation/stack"
const Stack=createStackNavigator();
function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return(
    <NavigationContainer>

  {<HomeStack/>}
    </NavigationContainer>
)}