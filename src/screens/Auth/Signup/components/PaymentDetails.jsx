import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Spacer from "lib/components/spacer/Spacer";

const PaymentDetails = () => {
    const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <Text style={styles.title}>Payment Details</Text>
        <FormInput
          placeholder="Enter yor card name"
          label="Card Holder Name"
          keyboard="default"
        />
        <Spacer />
        <FormInput
          placeholder="Enter Card Number"
          label="Card Number"
          keyboard="number"
        />
        <Spacer />
        <View style={styles.dateContainer}>
          <View>
            <FormInput
              placeholder="Enter Expiry Date"
              label="Expiry Date"
              keyboard="default"
            />
          </View>
          <View>
            <FormInput placeholder="Enter CVV" label="CVV" keyboard="default" />
          </View>
        </View>
        <View style={styles.conditionsContainer}>
          <Text style={styles.conditionsText}>
            I accept the Bedrock Exchange Terms and Condition
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentDetails;
