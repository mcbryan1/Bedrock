import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin, OnbordingOne, OnbordingTwo, OnbordingThree, Verify, Home } from "screens";
import { welcomeOptions } from "./AppbarExports";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnbordingOne"
        children={({ navigation }) => <OnbordingOne navigation={navigation} />}
        options={welcomeOptions}
      />
      <Stack.Screen
        name="OnbordingTwo"
        children={({ navigation }) => <OnbordingTwo navigation={navigation} />}
        options={welcomeOptions}
      />
      <Stack.Screen
        name="OnbordingThree"
        children={({ navigation }) => (
          <OnbordingThree navigation={navigation} />
        )}
        options={welcomeOptions}
      />
      <Stack.Screen
        name="Signin"
        children={({ navigation }) => <Signin navigation={navigation} />}
        options={welcomeOptions}
      />
      <Stack.Screen
        name="Verify"
        children={({ navigation }) => <Verify navigation={navigation} />}
        options={welcomeOptions}
      />
      <Stack.Screen
        name="Home"
        children={({ navigation }) => <Home navigation={navigation} />}
        options={welcomeOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
