import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './welcome';
import HomePage from './homepage'
import AboutUsPage from './aboutus';
import LoginPage from './loginpage'
import SignupPage from './SignupPage';
import MainPage from './Mainpage';
import OptionsPage from './options';
import BalancePage from './balance';
import PayPage from './Pay';
import ReportPage from './report';
import CreateBankAccountPage from './createaccount';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mainpage"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Options"
          component={OptionsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Balance"
          component={BalancePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pay"
          component={PayPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={ReportPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateBankAccountPage}
          options={{ headerShown: false }}
        />
        {/* Add other screens and navigation configurations here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}