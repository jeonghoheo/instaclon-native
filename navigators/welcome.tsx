import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "./logged-out-nav";

function Welcome({ navigation }: StackScreenProps<RootStackParamList>) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Text>Go to LogIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
