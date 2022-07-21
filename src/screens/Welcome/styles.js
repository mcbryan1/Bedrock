import { StyleSheet, Dimensions } from "react-native";
import { colors, dimensions } from "lib/constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  
});

export default styles;
