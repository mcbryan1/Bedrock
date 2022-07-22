import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Selector from "lib/components/select/Selector";
import Spacer from "lib/components/spacer/Spacer";

const OtherDetails = () => {
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <Text style={styles.title}>Other Details</Text>
        <View style={styles.inputContainer}>
          <Selector
            title="Country"
            options={[
              { label: "Nigeria", value: country },
              { label: "Ghana", value: country },
              { label: "Togo", value: country },
              { label: "Benin", value: country },
            ]}
            onSelect={(country) => setCountry(country)}
          />
        </View>
        <Spacer />

        <FormInput
          placeholder="Enter your postal code"
          label="Postal Code"
          keyboard="number"
        />

        <Spacer />
        <Selector
          title="Buyer/Seller/Merchant"
          options={[
            { label: "Buyer", value: type },
            { label: "Seller", value: type },
            { label: "Merchant", value: type },
          ]}
          onSelect={(type) => setType(type)}
        />
      </ScrollView>
    </View>
  );
};

export default OtherDetails;
