import { createStackNavigator } from "@react-navigation/stack";
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator();

export default function TestRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="testScreen"
        component={TestScreen}
        options={{
          title: "الملف الشخصي",
        }}
      />
    </Stack.Navigator>
  );
}
