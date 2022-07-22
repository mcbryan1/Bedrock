import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Spacer from "lib/components/spacer/Spacer";
import Checkbox from "expo-checkbox";
import { colors, dimensions } from "lib/constants";
import { images } from "assets";



const PaymentDetails = () => {
  const [isSelected, setSelected] = useState(false);

  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={images.visa} style={styles.cardimg} />
            <Image source={images.paypal} style={styles.cardimg} />
            <Image source={images.maestro} style={styles.cardimg} />
        </View>
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
          <Checkbox
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelected}
            color={isSelected ? colors.primary : undefined}
          />
          <View style={styles.conditionsTextContainer}>
            <Text style={styles.conditionsText}>I accept the</Text>
            <TouchableOpacity>
              <Text style={styles.conditionsLink}>
                Bedrock Exchange Terms and Condition
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentDetails;
