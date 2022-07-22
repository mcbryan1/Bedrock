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
    marginTop: dimensions.rW.xl,
  },
  signinTextContainer:{
    marginHorizontal: dimensions.rW.sm,
    marginTop: dimensions.rW.md,
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
  },
  signInTextContainer:{
    flex: 4,
    justifyContent: "flex-end",
  },
  signinText:{
    fontSize: dimensions.rW.md,
    fontFamily: "Bold"
  },
  signinText2:{
    fontFamily: "Regular",
  },
  signinSubText:{
    fontFamily: "Regular"
  },
  inputContainer:{
    flex: 3,
    justifyContent: "center",
  },
  buttonContainer:{
    flex: 1,
    justifyContent: "center",
  },
  dontHaveContainer:{
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dontHaveTextContainer:{
    flexDirection: "row",
  },
  dontText:{
    fontFamily: "Regular",
    marginRight: dimensions.rW.xs,
  },
  signupText:{
    fontFamily: "Bold",
    color: colors.primary
  },
  orWith:{
    marginTop: dimensions.rH.mxs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  orLine:{
    width: dimensions.rW.xxl,
    height: 1,
    backgroundColor: colors.gray,
  },
  orText:{
    marginHorizontal: dimensions.rW.sm,
    fontFamily: "Regular",
    color: colors.darkGray,
  },
  google:{
    width: dimensions.rW.sm,
    height: dimensions.rH.mxs,
    marginRight: 10
  },
  googleContainer:{
    flexDirection: "row",
    alignItems: 'center',
    marginTop: dimensions.rH.sm
  },
  googleText:{
    color: colors.primary,
    fontFamily: "Bold"
  },
  button:{
    backgroundColor: colors.primary,
    paddingHorizontal: dimensions.rH.sm -5,
    borderRadius: dimensions.rW.xs,
  },
  buttonTextStyle:{
    color: colors.white,
    fontFamily: "Bold",
  }
});

export default styles;
