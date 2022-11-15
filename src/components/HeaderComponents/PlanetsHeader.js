import { StyleSheet, View } from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import CustomText from "../Text/CustomText";

export default PlanetHeader = () => {
  return (
    <View style={styles.container}>
      <CustomText preset="h2">THE PLANETS</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
});
