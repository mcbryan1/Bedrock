import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "screens";
import { welcomeOptions } from "./AppbarExports";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        children={({ navigation }) => <Welcome navigation={navigation} />}
        options={welcomeOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
