import { StyleSheet } from "react-native";
import { colors, dimensions } from "lib/constants";

const styles = StyleSheet.create({
  textInput: {
    height: dimensions.rH.msm,
    backgroundColor: colors.grayLight,
    paddingHorizontal: 10,
    borderRadius: dimensions.radius.xs,
    borderColor: colors.gray,
    borderWidth: 2,
    fontFamily: "Regular",
  },
  labelText:{
    fontSize: 15,
    fontFamily: 'Bold',
    color: colors.black,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: dimensions.radius.xs,
    backgroundColor: colors.primary,

    // borderColor: colors.black,
    // borderWidth: 1,
    height: dimensions.inputHeight - 10,
  },
  dateText: {
    fontSize: dimensions.font.sm,
    fontFamily: "Regular",
  },
});

export default styles;
