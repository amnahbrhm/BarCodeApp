import { StyleSheet, Button, Text, View } from "react-native";
import HomeRoutes from "./navigations/HomeRoutes";
import TestRoutes from "./navigations/TestRoutes";
import SettingsRoutes from "./navigations/SettingsRoutes";
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { useTheme } from "react-native-paper";
import { Colors } from "./constants/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ECECFD",
    },
  };
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          initialRouteName="Settings"
          activeColor={Colors.primary800}
          inactiveColor={Colors.primary500}
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: "flex",
              position: "absolute",
              bottom: 20,
              left: 25,
              right: 25,
              backgroundColor: "#5856D6",
              borderRadius: 30,
              height: 60,
              elevation: 5,
              shadowColor: "black",
              shadowOffset: { height: 4, right: 3 },
              shadowRadius: 6,
              shadowOpacity: 0.25,
            },
            backgroundColor: "red",
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Settings"
            component={SettingsRoutes}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    {
                      // elevation: focused ? 5 : 0,
                      shadowRadius: focused ? 2 : 0,
                    },
                    styles.iconTab,
                  ]}
                >
                  <Ionicons
                    name="md-settings"
                    color={focused ? "white" : "#9594e5"}
                    size={focused ? 26 : 21}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="TestRoutes"
            component={TestRoutes}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    {
                      shadowRadius: focused ? 2 : 0,
                    },
                    styles.iconTab,
                  ]}
                >
                  <Ionicons
                    name="person"
                    color={focused ? "white" : "#9594e5"}
                    size={focused ? 26 : 21}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="HomeRoutes"
            component={HomeRoutes}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    {
                      shadowRadius: focused ? 2 : 0,
                    },
                    styles.iconTab,
                  ]}
                >
                  <Ionicons
                    name="md-home"
                    color={focused ? "white" : "#9594e5"}
                    size={focused ? 26 : 21}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
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
  iconTab: {
    top: 0,
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    // backgroundColor: 'black',
    shadowColor: "white",
    shadowOffset: { height: 1, right: 1 },
    shadowOpacity: 0.25,
  },
});
