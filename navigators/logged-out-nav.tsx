import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../screens/create-account";
import LogIn from "./log-in";
import Welcome from "./welcome";

export type RootStackParamList = {
  LogIn: undefined;
  CreateAccount: undefined;
  Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}

export default LoggedOutNav;
