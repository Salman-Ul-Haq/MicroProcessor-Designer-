import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectProgram from './Screens/SelectProgram';
import FDE from './Screens/FDE';
import Run from './Screens/Run';
import Add2num from './Screens/programs/Add2num'
import Add2numRun from './Screens/RunningProgram/Add2numRun'
import Sub2num from './Screens/programs/Sub2num'
import Sub2numRun from './Screens/RunningProgram/Sub2numRun'
import Mul2num from './Screens/programs/Mul2num'
import Mul2numRun from './Screens/RunningProgram/Mul2numRun'
import Div2num from './Screens/programs/Div2num'
import Div2numRun from './Screens/RunningProgram/Div2numRun'


import { NavigationActions } from "react-navigation";



const App=()=>{
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Run' screenOptions={{
    headerShown: false
  }}>


        <Stack.Screen name="FDE" component={FDE} />
        <Stack.Screen name="Run" component={Run} />
        <Stack.Screen name="Sp" component={SelectProgram} />

        <Stack.Screen name="A2n" component={Add2num} />
        <Stack.Screen name="A2nr" component={Add2numRun} />

        <Stack.Screen name="S2n" component={Sub2num} />
        <Stack.Screen name="S2nr" component={Sub2numRun} />

        <Stack.Screen name="M2n" component={Mul2num} />
        <Stack.Screen name="M2nr" component={Mul2numRun} />

        <Stack.Screen name="D2n" component={Div2num} />
        <Stack.Screen name="D2nr" component={Add2numRun} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


