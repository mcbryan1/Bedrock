import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Selector from "lib/components/select/Selector";
import Spacer from "lib/components/spacer/Spacer";

const VerifyOtp = () => {

  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <Text style={styles.title}>
            Verify Your Email Address
        </Text>

        <FormInput
          placeholder="Enter the OTP sent to your email address"
          label="Verification Code"
          keyboard="number"
        />

        <Spacer />
        
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </ScrollView>
    </View>
  );
};

export default VerifyOtp;
