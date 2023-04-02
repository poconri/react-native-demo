import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Registro: undefined;
  Inicio: undefined;
};

export type TabStackParamList = {
  ["Nuevo Producto"]: undefined;
  Configuración: undefined;
  Productos: undefined;
};

export type HomeStackParamList = {
  ["Añadir Nuevo Producto"]: undefined;
  ["Confirmar Producto"]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type TabStackScreenProps<T extends keyof TabStackParamList> =
  StackScreenProps<TabStackParamList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
