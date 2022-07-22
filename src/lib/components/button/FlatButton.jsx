import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width } = Dimensions.get("window");
import { dimensions, colors } from "lib/constants";
const FlatButton = ({
  onPress,
  color,
  title,
  textColor,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text
          style={{
            color: textColor ?? "#fff",
            fontSize: 15,
            fontFamily: "Bold",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: dimensions.rH.msm,
    // elevation: 1,
  },
});

export default FlatButton;
