import { useNavigation } from "@react-navigation/native";
import { HomeStackScreenProps } from "../../../../types/navigation";
import { useProductStore } from "../../../../store/useCreateProduct";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import { Button } from "../../../../components/button/button";
import { ProductTranslations } from "../create-product/createProduct";

export const Confirm = () => {
  const { product, createProduct, clearProduct } = useProductStore(
    ({ product, createProduct, clearProduct }) => ({
      product,
      createProduct,
      clearProduct,
    })
  );
  const navigation =
    useNavigation<HomeStackScreenProps<"Confirmar Producto">["navigation"]>();

  const handleConfirm = () => {
    createProduct().then(() => {
      clearProduct();
      Alert.alert("Éxito", "Producto creado con éxito.");
      navigation.navigate("Añadir Nuevo Producto");
    });
  };
  return (
    <View style={styles.container}>
      {Object.keys(product).map((key) => (
        <View>
          <Text style={styles.label}>{ProductTranslations[key]}</Text>
          <Text>{product[key]}</Text>
        </View>
      ))}
      <Button
        text="Confirmar"
        onPress={handleConfirm}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};
