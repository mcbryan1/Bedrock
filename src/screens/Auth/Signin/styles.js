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
    marginHorizontal: dimensions.rW.sm,
  },
  
  blob: {
    position: "absolute",
    left: -55,
    width: width * 0.7,
    height: height * 0.3,
    top: -100,
  },
  blob2:{
    position: "absolute",
    left: -50,
    width: width * 0.7,
    height: height * 0.3,
    top: -98,
  },
  blob3:{
    position: "absolute",
    left: -45,
    width: width * 0.7,
    height: height * 0.3,
    top: -95,
  },
  signInTextContainer:{
    flex: 4,
    justifyContent: "flex-end",
  },
  signinText:{
    fontSize: dimensions.rW.md,
    fontFamily: "Bold"
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
  }
});

export default styles;
