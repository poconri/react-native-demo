import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/login/login";
import { Register } from "./src/screens/register/register";
import { Home } from "./src/screens/home/home";
import {
  HomeStackParamList,
  RootStackParamList,
  TabStackParamList,
} from "./src/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "./src/screens/home/tabs/settings";
import useAuthenticationStore from "./src/store/useAuthenticationStore";
import { HandcraftProducts } from "./src/screens/home/screens/handcraft-products/handcraft-products";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const token = useAuthenticationStore((state) => state.token);
  const [homeView, setHomeView] = useState<keyof HomeStackParamList>(
    "Añadir Nuevo Producto"
  );

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator initialRouteName="Nuevo Producto">
            <Tab.Screen name="Productos" component={HandcraftProducts} />
            <Tab.Screen
              name="Nuevo Producto"
              options={({ route }) => ({
                headerShown: route.name !== "Nuevo Producto",
              })}
              component={Home}
            />
            <Tab.Screen name="Configuración">
              {() => <Settings setIsLoggedIn={setIsLoggedIn} />}
            </Tab.Screen>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={({ route }) => ({
              headerShown: route.name !== "Inicio",
            })}
          >
            <Stack.Screen name="Inicio">
              {() => <Login setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Registro" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
