import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import ExpenseOverview from './components/ExpenseOverview';
import ExpenseAdd from './components/ExpenseAdd';
import ExpenseDelete from './components/ExpenseDelete';
import ExpenseEdit from './components/ExpenseEdit';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
      <Stack.Screen name="ExpenseAdd" component={ExpenseAdd} />
      <Stack.Screen name="ExpenseDelete" component={ExpenseDelete} />
      <Stack.Screen name="ExpenseEdit" component={ExpenseEdit} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;


