import { StyleSheet, Dimensions } from "react-native";
import { colors, dimensions } from "lib/constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    flex: 10,
  },
  skip: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  skipText: {
    fontFamily: "Bold",
    fontSize: dimensions.rH.xs + 2,
    color: colors.primary,
  },

  textContainer: {
    marginHorizontal: dimensions.rW.md,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Bold",
    fontSize: dimensions.rH.xs + 3,
    color: colors.darkGray,
    textAlign: "center",
    lineHeight: dimensions.rH.mxs,
  },
  skipIcon: {
    marginLeft: 5,
    color: colors.primary,
    fontSize: dimensions.rH.xs + 2,
  },
  skipContainer: {
    flex: 2,
    justifyContent: "center",
  },
  imageTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
  },
  stepContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: dimensions.rH.lg + 10,
  },
  stepActive: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  stepInactive: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    flex: 2,
    marginHorizontal: width * 0.1,
  },
  blob: {
    position: "absolute",
    left: -60,
    width: width * 0.7,
    height: height * 0.3,
    top: -80,
  },
  blob2:{
    position: "absolute",
    left: -56,
    width: width * 0.7,
    height: height * 0.3,
    top: -76,
  },
  blob3:{
    position: "absolute",
    left: -52,
    width: width * 0.7,
    height: height * 0.3,
    top: -72,
  }
});

export default styles;
