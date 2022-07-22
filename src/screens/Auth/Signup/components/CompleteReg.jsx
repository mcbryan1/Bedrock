import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Spacer from "lib/components/spacer/Spacer";

const CompleteRegistration = () => {

  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <Text style={styles.title}>Complete Your Registration</Text>

        <FormInput
          placeholder="Enter your email address"
          label="Email Address"
          keyboard="email"
        />

        <Spacer />
        <FormInput
          placeholder="Enter your password"
          label="Password"
          keyboard="default"
          secureTextEntry={true}
        />
        <Spacer />
        <FormInput
          placeholder="Confirm your password"
          label="Confirm Password"
          keyboard="default"
          secureTextEntry={true}
        />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </ScrollView>
    </View>
  );
};

export default CompleteRegistration;
