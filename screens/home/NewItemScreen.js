import ItemForm from "../../components/General/ItemForm";
import { Animated } from "react-native";

function NewItemScreen({ navigation }) {
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });
  function openScanBarcode() {
    // navigation.navigate('HomeRoutes', { screen: 'ScanScreen' })
    console.log("open scan");
  }
  return (
    <>
      <ItemForm onCancel={() => navigation.goBack()}  />
    </>
  );
}

export default NewItemScreen;
