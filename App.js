import { StyleSheet, Button, Text, View } from "react-native";
import HomeRoutes from "./navigations/HomeRoutes";
import TestRoutes from "./navigations/TestRoutes";
import SettingsRoutes from "./navigations/SettingsRoutes";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import { Colors } from './constants/styles';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeRoutes"
        activeColor={Colors.primary800}
        inactiveColor={Colors.primary500}
        // activeBackgroundColor={Colors.primary200}
        barStyle={{ backgroundColor: Colors.accent200 }}
      >
        <Tab.Screen
          name="Settings"
          component={SettingsRoutes}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-settings" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TestRoutes"
          component={TestRoutes}
          options={{
            tabBarLabel: "Profile",
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
