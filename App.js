import { StyleSheet, Button, Text, View } from "react-native";
import HomeRoutes from "./navigations/HomeRoutes";
import TestRoutes from "./navigations/TestRoutes";
import SettingsRoutes from "./navigations/SettingsRoutes";

import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { Colors } from "./constants/styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Settings"
        activeColor={Colors.primary800}
        inactiveColor={Colors.primary500}
        // activeBackgroundColor={Colors.primary200}
        barStyle={{ backgroundColor: Colors.accent200}}
      >
        <Tab.Screen
          name="Settings"
          component={SettingsRoutes}
          options={{
            headerShown:false,
            tabBarLabel: "الاعدادات",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-settings" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          // barStyle={{ display: 'none' }}
          options={{
            // tabBarStyle: { display: "none" },
            headerShown:false,
            tabBarLabel: "الصفحة الرئيسية",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TestRoutes"
          component={TestRoutes}
          options={{
            headerShown:false,
            tabBarLabel: "الملف الشخصي",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});
