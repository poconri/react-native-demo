import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../../types/navigation";
import { CreateProduct } from "./screens/create-product/createProduct";
import { Confirm } from "./screens/confirm/confirm";

export const Home = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <HomeStack.Navigator initialRouteName="Añadir Nuevo Producto">
      <HomeStack.Screen name="Confirmar Producto" component={Confirm} />
      <HomeStack.Screen
        name="Añadir Nuevo Producto"
        component={CreateProduct}
      />
    </HomeStack.Navigator>
  );
};
