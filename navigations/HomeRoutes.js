import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import ExpenseForm from "../components/General/ItemForm";
import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Platform } from "react-native";
const Stack = createStackNavigator();

export default function HomeRoutes({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName);
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
    if (routeName === "AddItemScreen") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          bottom: 20,
          left: 25,
          right: 25,
          elevation: 5,
          backgroundColor: "#5856D6",
          borderRadius: 30,
          height: 60,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "الصفحة الرئيسية",
        }}
      />
      <Stack.Screen
        name="AddItemScreen"
        component={ExpenseForm}
        options={{
          title: "اضافة منتج ",
          presentation: "modal",
          headerShown: Platform.OS === "ios" ? false : true,
        }}
      />
    </Stack.Navigator>
  );
}
