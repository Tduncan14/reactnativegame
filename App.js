import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Game from './screens/Game';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style="auto">
          <Stack.Navigator  initialRouteName='Home'  screenOptions={{
       headerTitleAlign: 'center'
      }}>
             <Stack.Screen  name='Home' component={Home}/>
             <Stack.Screen  name='Game' component={Game} />
           </Stack.Navigator>
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
