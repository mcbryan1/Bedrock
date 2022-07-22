import { StyleSheet, Dimensions } from "react-native";
import { colors, dimensions } from "lib/constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  personalContainer: {
    flex: 1,
    marginHorizontal: dimensions.rW.sm,
  },
  imageContainer:{
flexDirection: "row",
justifyContent: "space-around",
  },
  cardimg:{
    width: dimensions.rW.lg + 2,
    height: dimensions.rW.md + 10,
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
  },
  conditionsContainer:{
    flexDirection: "row",
    marginTop: dimensions.rH.mxs,
  },
  conditionsText:{
    fontFamily: "Regular",
    fontSize: dimensions.rH.xs,
    marginLeft: dimensions.rW.sm,
  },
  conditionsLink:{
    fontFamily: "Regular",
    fontSize: dimensions.rH.xs,
    marginLeft: dimensions.rW.xs,
    color: colors.primary,
  },
  conditionsTextContainer:{
    flexDirection: "row",
  }
});

export default styles;
