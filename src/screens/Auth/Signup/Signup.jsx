import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { images } from "assets";
import FlatButton from "lib/components/button/FlatButton";
import FormInput from "lib/components/inputs/FormInputs";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { colors, dimensions } from "lib/constants";
import PersonalDetails from "./components/PersonalDetails";
import OtherDetails from "./components/OtherDetails";
import CompleteRegistration from "./components/CompleteReg";
import VerifyOtp from "./components/VerifyReg";
import PaymentDetails from "./components/PaymentDetails";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image source={images.blob3} style={styles.blob3} />
      <Image source={images.blob2} style={styles.blob2} />
      <Image source={images.blob1} style={styles.blob} />
      <ScrollView>
        <View style={styles.subContainer}>
          <View style={styles.signinTextContainer}>
            <Text style={styles.signinText}>Signup</Text>
            <Text style={styles.signinText2}>
              let's get you set up in few minute
            </Text>
          </View>
          <ProgressSteps
            nextBtnTextStyle={styles.buttonText}
            previousBtnTextStyle={styles.buttonText}
            activeStepIconBorderColor={colors.primary}
            activeLabelColor={colors.primary}
            labelFontFamily="Bold"
            labelFontSize={12}
            completedLabelColor={colors.primary}
            progressBarColor={colors.primaryLight}
            completedProgressBarColor={colors.primary}
            completedStepIconColor={colors.primary}
            disabledStepIconColor={colors.primaryLight}
          >
            <ProgressStep
              nextBtnStyle={styles.button}
              nextBtnTextStyle={styles.buttonTextStyle}
            >
              <PersonalDetails />
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={styles.button}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <OtherDetails />
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={styles.button}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <CompleteRegistration />
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={styles.button}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <VerifyOtp />
            </ProgressStep>
            <ProgressStep
              nextBtnStyle={styles.button}
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <PaymentDetails />
            </ProgressStep>
          </ProgressSteps>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
