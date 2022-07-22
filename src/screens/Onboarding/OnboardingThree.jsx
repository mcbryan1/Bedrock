import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { images } from "assets";
import FlatButton from "lib/components/button/FlatButton";
import FormInput from "lib/components/inputs/FormInputs";
import { AntDesign } from "@expo/vector-icons";

const OnboardingThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={images.blob3} style={styles.blob3} />
      <Image source={images.blob2} style={styles.blob2} />
      <Image source={images.blob1} style={styles.blob} />
      <View style={styles.subContainer}>
        <View style={styles.skipContainer}>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => {
              navigation.navigate("Signin");
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
            <AntDesign name="arrowright" style={styles.skipIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={images.accept} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              You can always convert your assets into ready cash, anytime,
              anywhere.
            </Text>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepInactive} />
          <View style={styles.stepInactive} />
          <View style={styles.stepActive} />
        </View>
        <View style={styles.buttonContainer}>
          <FlatButton
            onPress={() => {
              navigation.navigate("Signin");
            }}
            title="Get Started"
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingThree;
