import { SafeAreaView, StyleSheet } from "react-native";
import PlanetsHeader from "../../components/HeaderComponents/PlanetsHeader";
import CustomText from "../../components/Text/CustomText";
import colors from "../../theme/colors";
import globalStyles from "../../theme/globalStyles";

export default HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetsHeader />
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
