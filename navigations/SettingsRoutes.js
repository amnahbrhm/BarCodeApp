import { createStackNavigator } from "@react-navigation/stack";
import BarCodeScanScreen from "../screens/BarCodeScanScreen";

const Stack = createStackNavigator();

export default function SettingsRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        // cardStyle: {
        //   backgroundColor: "red",
        // },
        headerBackground: () => {
          color: "#ECECFD";
        },
        headerTintColor: "#14134A",

      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={BarCodeScanScreen}
        options={{
          title: "الاعدادات",
        }}
      />
    </Stack.Navigator>
  );
}
