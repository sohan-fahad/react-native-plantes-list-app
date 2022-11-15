import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import PlanetsHeader from "../../components/HeaderComponents/PlanetsHeader";
import globalStyles from "../../theme/globalStyles";
import colors from "../../theme/colors";

export default DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetsHeader isBackBtm={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.adroidSafeArea,
    backgroundColor: colors.black,
  },
});
