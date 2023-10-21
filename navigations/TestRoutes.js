import { createStackNavigator } from "@react-navigation/stack";
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator();

export default function TestRoutes() {
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
        name="testScreen"
        component={TestScreen}
        options={{
          title: "الملف الشخصي",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
    </Stack.Navigator>
  );
}
