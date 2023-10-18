import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "الصفحة الرئيسية",
        }}
      />
    </Stack.Navigator>
  );
}
