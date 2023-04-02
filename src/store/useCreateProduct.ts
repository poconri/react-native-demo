import { Alert } from "react-native";
import { create } from "zustand";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
}

interface ProductState {
  product: Omit<Product, "id">;
  setProductProperty: (property: keyof Product, value: string) => void;
  clearProduct: () => void;
  createProduct: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
  product: {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
  },
  setProductProperty: (property: keyof Product, value: string) => {
    set((state) => ({
      product: {
        ...state.product,
        [property]: value,
      },
    }));
  },
  clearProduct: () => {
    set(() => ({
      product: {
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
      },
    }));
  },
  createProduct: async () => {
    const { product } = get();
    try {
      const response = await fetch("https://dummyjson.com/auth/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
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
  },
}));
