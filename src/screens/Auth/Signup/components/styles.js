import { StyleSheet, Dimensions } from "react-native";
import { colors, dimensions } from "lib/constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  personalContainer: {
    flex: 1,
    marginHorizontal: dimensions.rW.sm,
  },
  title:{
    fontSize: dimensions.rH.mxs,
    fontFamily: "Bold",
    marginBottom: dimensions.rH.sm,
  },
  phoneContainer:{
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  select:{
    flex: 3.5,
  },
  phoneInput:{
    flex: 6,
  },
  mid:{
    flex: .5,
  },
  dateContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default styles;
