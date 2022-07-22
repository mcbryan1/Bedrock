import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Select } from "@mobile-reality/react-native-select-pro";
import { colors, dimensions } from "lib/constants";

const Selector = ({
  title,
  options,
  onSelect,
  textStyle,
  selectedValue,
  ...props
}) => {
  return (
    <View>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <Select
        selectControlArrowImageStyle={{
          width: dimensions.rH.mxs,
          height: dimensions.rH.mxs,
          tintColor: colors.primary,
        }}
        selectControlStyle={{
          borderWidth: 0,
          borderRadius: 0,
          borderColor: colors.primary,
          backgroundColor: "transparent",
          height: dimensions.rH.msm,
        }}
        selectControlTextStyle={{
          fontFamily: "Bold",
          fontSize: dimensions.rH.mxs - 10,
          color: colors.primary,
        }}
        selectControlTextHighlightStyle={{
          fontFamily: "Bold",
          fontSize: dimensions.rH.mxs - 10,
          color: colors.primary,
        }}
        selectControlClearOptionImageStyle={{
          width: dimensions.rH.mxs - 5,
          height: dimensions.rH.mxs - 5,
          tintColor: colors.primary,
        }}
        placeholderTextColor={colors.primary}
        selectContainerStyle={styles.selectContainer}
        options={options}
        onSelect={onSelect}
        selectedValue={selectedValue}
        {...props}
      />
    </View>
  );
};

export default Selector;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Bold",
    color: colors.black,
    fontSize: 15,
    marginBottom: 10,
  },
  selectContainer: {
    height: dimensions.rH.msm,
    width: "100%",
    backgroundColor: colors.grayLight,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: 0,

    borderRadius: dimensions.radius.xs,
    fontFamily: "Regular",
    justifyContent: "center",
  },
});
