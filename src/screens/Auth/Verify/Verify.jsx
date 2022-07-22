import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { images } from "assets";
import FlatButton from "lib/components/button/FlatButton";
import FormInput from "lib/components/inputs/FormInputs";

const Verify = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={images.blob3} style={styles.blob3} />
      <Image source={images.blob2} style={styles.blob2} />
      <Image source={images.blob1} style={styles.blob} />
      <View style={styles.subContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.signInTextContainer}>
            <Text style={styles.signinText}>Verify OTP</Text>
            <Text style={styles.signinSubText}>
              WWe want to know that you are the one trying to log in. A 6ix
              digit code has been sent to your registration
              email@*********nonso45@gmail.com
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <FormInput
              placeholder="Enter OTP"
              label="Verification Code"
              keyboard="number"
            />
          </View>
          <View style={styles.buttonContainer}>
            <FlatButton
            onPress={()=> navigation.navigate("Home")} 
            title="Signin" />
          </View>
          <View style={styles.dontHaveContainer}>
            <View style={styles.dontHaveTextContainer}>
              <Text style={styles.dontText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signupText}>Signup</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.signupText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.orWith}>
              <View style={styles.orLine}></View>
              <Text style={styles.orText}>Or with</Text>
              <View style={styles.orLine}></View>
            </View>
            <View style={styles.googleContainer}>
              <Image source={images.google} style={styles.google} />
              <TouchableOpacity>
                <Text style={styles.googleText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Verify;
