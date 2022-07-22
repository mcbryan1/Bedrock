import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { images } from "assets";
import FlatButton from "lib/components/button/FlatButton";
import FormInput from "lib/components/inputs/FormInputs";
import { AntDesign } from "@expo/vector-icons";

const OnbordingOne = ({ navigation }) => {
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
          <Image source={images.secure} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Bedrock is a secure platform as we adhere to strict KYC protocols
            </Text>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepActive} />
          <View style={styles.stepInactive} />
          <View style={styles.stepInactive} />
        </View>
        <View style={styles.buttonContainer}>
          <FlatButton 
          onPress={() => {
              navigation.navigate("OnbordingTwo");
            }}
          title="Next"  />
        </View>
      </View>
    </View>
  );
};

export default OnbordingOne;
