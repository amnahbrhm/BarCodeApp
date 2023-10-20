import PrimaryButton from "../../components/UI/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle, Padding } from "../../constants/styles";
import { useLayoutEffect } from "react";
function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <PrimaryButton onPress={openFormModal} style={{width: 100}}>
            <View style={styles.buttonTitleContiner}>
              <Text style={styles.buttonTitleText}>منتج جديد</Text>
              <Ionicons name="add-circle-outline" size={12} color="white" />
            </View>
          </PrimaryButton>
        );
      },
    });
  }, []);
  function openFormModal() {
    navigation.navigate('HomeRoutes', { screen: 'AddItemScreen' })
    // console.log("open modal");
  }
  return (
    <>
      <View style={styles.headerContiner}>
        <Text style={GeneralStyle.title}>عرض القوائم </Text>
      </View>
      <View style={styles.contentContiner}>
        <Text>العرض هنا </Text>
    </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  // contentContiner: {
  //   flex: 6
  // },
  headerContiner: {
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.md,
  },
  buttonTitleContiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    // padding: 3
  },
  buttonTitleText: {
    fontSize: 12,
    color: "white",
    paddingHorizontal: Padding.sm
  },
});
