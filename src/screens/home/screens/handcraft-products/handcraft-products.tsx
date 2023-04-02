import { useEffect, useState } from "react";
import { Product } from "../../../../store/useCreateProduct";
import { View, Text, FlatList, Alert } from "react-native";
import styles from "./styles";
import useAuthenticationStore from "../../../../store/useAuthenticationStore";
import { Button } from "../../../../components/button/button";
import { ProductTranslations } from "../create-product/createProduct";

const isProduct = (data: unknown): data is Product[] => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "title" in data &&
    "description" in data &&
    "price" in data &&
    "discountPercentage" in data
  );
};

export const HandcraftProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const token = useAuthenticationStore((state) => state.token);

  const fetchProducts = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        "https://dummyjson.com/auth/products/category/handcraft",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const products: Product[] = await data.products;
      setProducts(products);
      setRefreshing((status) => !status);
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo obtener los productos o no hay disponibles, agrega uno y vuelve a intentar. Por favor, inténtalo de nuevo más adelante."
      );
      setRefreshing((status) => !status);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={styles.label}>{ProductTranslations["title"]}:</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{ProductTranslations["description"]}:</Text>
        <Text>{item.description}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{ProductTranslations["price"]}:</Text>
        <Text>{item.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          {ProductTranslations["discountPercentage"]}:
        </Text>
        <Text>{item.discountPercentage}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={fetchProducts}
          refreshing={refreshing}
        />
      ) : (
        <>
          <Text style={styles.header}>No hay productos intenta mas tarde</Text>
          <Button
            text="Reintentar"
            onPress={fetchProducts}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </>
      )}
    </View>
  );
};
