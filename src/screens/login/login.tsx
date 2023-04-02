import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./style";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RootStackScreenProps } from "../../types/navigation";
import useAuthenticationStore from "../../store/useAuthenticationStore";

interface User {
  name: string;
  password: string;
}

interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const Login = (props: LoginProps) => {
  const [user, setUser] = useState<User>({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigation =
    useNavigation<RootStackScreenProps<"Inicio">["navigation"]>();
  const setToken = useAuthenticationStore((state) => state.setToken);

  const handleUserChange = (newText: string, key: keyof User) => {
    if (error !== "") {
      setError("");
    }
    setUser({
      ...user,
      [key]: newText,
    });
  };

  const handleLogin = async () => {
    if (user.name === "" || user.password === "") {
      setError(
        "Por favor ingrese un nombre de usuario y contraseña para continuar."
      );
      return;
    }
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user.name, password: user.password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        props.setIsLoggedIn(true);
      } else {
        Alert.alert("Error", data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Error al iniciar sesión. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden />
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={(event) => handleUserChange(event, "name")}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(event) => handleUserChange(event, "password")}
        value={user.password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Collapsible collapsed={error === ""}>
        <Text style={styles.error} numberOfLines={2}>
          {error}
        </Text>
      </Collapsible>
      <View style={styles.createAccount}>
        <Text>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text
            style={{
              color: "blue",
            }}
          >
            Registrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function useAuthStore(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
