import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Button } from "../../../components/button/button";
import styles from "./styles";

interface SettingsProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const Settings = (props: SettingsProps) => {
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Cerrar Sesión",
          onPress: () => props.setIsLoggedIn(false),
        },
      ]
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Button
        text="Cerrar Sesión"
        onPress={handleLogout}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};
