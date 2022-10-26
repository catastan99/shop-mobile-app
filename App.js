import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "./screens/CategoryScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductScreen from "./screens/ProductScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    TenorSans: require("./assets/fonts/TenorSans-Regular.ttf"),
    dmsans: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const StackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home2"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ title: "Categorie" }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ title: "Product" }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackScreen}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={18} color="black" />,
          }}
        />

        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: () => <Ionicons name="list" size={18} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
