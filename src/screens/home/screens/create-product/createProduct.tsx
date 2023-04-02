import { View, Text, TextInput, Alert } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Button } from "../../../../components/button/button";
import { Product, useProductStore } from "../../../../store/useCreateProduct";
import { useNavigation } from "@react-navigation/native";
import { HomeStackScreenProps } from "../../../../types/navigation";

export const ProductTranslations: Record<keyof Omit<Product, "id">, string> = {
  title: "Título",
  description: "Descripción",
  price: "Precio",
  discountPercentage: "Porcentaje de descuento",
};

export const CreateProduct = () => {
  const [error, setError] = useState("");
  const { product, setProductProperty } = useProductStore(
    ({ product, setProductProperty }) => ({
      product,
      setProductProperty,
    })
  );

  const navigation =
    useNavigation<
      HomeStackScreenProps<"Añadir Nuevo Producto">["navigation"]
    >();

  const createProduct = async (
    title: string,
    descripcion: string,
    price: string,
    discountPercentage: string
  ) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          descripcion,
          price,
          discountPercentage,
          stock: 1,
          category: "handcraft",
        }),
      });

      const responseData = await response.json();
      if (responseData.ok) {
        Alert.alert("Éxito", "Producto creado con éxito.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo crear el producto. Por favor, inténtalo de nuevo más adelante."
      );
    }
  };

  const handlePropertyChange = (property: keyof Product, value: string) => {
    setProductProperty(property, value);
    setError("");
  };

  const handleCreateProduct = () => {
    const blankFields = Object.entries(product).filter(
      ([_, value]) => value === ""
    );
    if (blankFields.length > 0) {
      const isOneField = blankFields.length === 1;
      setError(
        `Por favor, rellena todos los campos.  ${
          isOneField
            ? "El siguiente campo esta vacío"
            : "Los siguientes campos están vacíos:"
        } ${blankFields.reduce(
          (acc, [key], index) =>
            `${acc}${
              acc == "" ? "" : index + 1 === blankFields.length ? " y " : ", "
            }${ProductTranslations[key]}`,
          ""
        )}`
      );
      return;
    } else {
      navigation.navigate("Confirmar Producto");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ProductTranslations.title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) => handlePropertyChange("title", event)}
        value={product.title}
        placeholder="Introduce el título del producto"
      />
      <Text style={styles.label}>{ProductTranslations.description}</Text>
      <TextInput
        style={styles.textarea}
        onChangeText={(event) => handlePropertyChange("description", event)}
        value={product.description}
        placeholder="Introduce la descripción del producto"
        multiline
      />
      <Text style={styles.label}>{ProductTranslations.price}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) => handlePropertyChange("price", event)}
        value={product.price}
        placeholder="Introduce el precio del producto"
        keyboardType="numeric"
      />
      <Text style={styles.label}>{ProductTranslations.discountPercentage}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) =>
          handlePropertyChange("discountPercentage", event)
        }
        value={product.discountPercentage}
        placeholder="Introduce el porcentaje de descuento del producto"
        keyboardType="numeric"
      />
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        text="Añadir Producto"
        onPress={() => handleCreateProduct()}
      />
      <Collapsible collapsed={error === ""}>
        <Text style={styles.error} numberOfLines={4}>
          {error}
        </Text>
      </Collapsible>
    </View>
  );
};
