import { createStackNavigator } from "@react-navigation/stack";
import BarCodeScanScreen from "../screens/BarCodeScanScreen";

const Stack = createStackNavigator();

export default function SettingsRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={BarCodeScanScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}
