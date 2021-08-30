import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../screens/create-account";
import Login from "./login";
import Welcome from "./welcome";

const Stack = createStackNavigator();

function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default LoggedOutNav;
