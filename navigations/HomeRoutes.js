import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import ExpenseForm from "../components/General/ItemForm"
import {useLayoutEffect} from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function HomeRoutes({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName);
    navigation.setOptions({tabBarStyle: {display: 'none'}});
    // if (routeName === "AddItemScreen"){
    // }else {
    //     navigation.setOptions({tabBarVisible: true});
    // }
}, [navigation, route]);
  return (
    <Stack.Navigator>
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
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
