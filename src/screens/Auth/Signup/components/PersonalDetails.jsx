import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import FormInput from "lib/components/inputs/FormInputs";
import Selector from "lib/components/select/Selector";
import Spacer from "lib/components/spacer/Spacer";

const PersonalDetails = () => {
  const [item, setItem] = useState("");
  const [gender, setGender] = useState("")
  return (
    <View style={styles.personalContainer}>
      <ScrollView>
        <Text style={styles.title}>Personal Details</Text>
        <View style={styles.inputContainer}>
          <FormInput placeholder="Enter your first name" label="First Name" />
          <Spacer />
          <FormInput placeholder="Enter your last name" label="Last Name" />
          <Spacer />
          <View style={styles.phoneContainer}>
            <View style={styles.select}>
              <Selector
                title="Phone Number"
                options={[
                  { label: "+234", value: item },
                  { label: "+233", value: item },
                  { label: "+254", value: item },
                  { label: "+294", value: item },
                ]}
                onSelect={(item) => setItem(item)}
              />
            </View>
            <View style={styles.mid} />
            <View style={styles.phoneInput}>
              <FormInput
                placeholder="Enter your phone number"
                // label="Phone Number"
                keyboard="number"
              />
            </View>
          </View>
            <Spacer />
            <Selector 
                title="Gender"
                options={[
                    { label: "Male", value: gender },
                    { label: "Female", value: gender },
                    
                  ]}
                onSelect={(gender) => setGender(gender)}
            />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalDetails;
