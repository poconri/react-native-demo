import React, { useState } from "react";
import { View, Text, TextInput, Alert, StatusBar } from "react-native";
import { Button } from "../../components/button/button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types/navigation";

export function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const navigation =
    useNavigation<RootStackScreenProps<"Inicio">["navigation"]>();

  const handleRegister = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          age: parseInt(age, 10),
          email,
          username,
          password,
          gender,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert("Éxito", "Usuario registrado con éxito.");
        navigation.navigate("Inicio");
      } else {
        Alert.alert(
          "Error",
          responseData.message || "Error al registrar el usuario."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo registrar al usuario. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={setFirstName}
          value={firstName}
        />
        <Text style={styles.label}>Apellido</Text>
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          onChangeText={setLastName}
          value={lastName}
        />
        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          placeholder="Edad"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Text style={styles.label}>Género</Text>
        <TextInput
          style={styles.input}
          placeholder="Género)"
          onChangeText={setGender}
          value={gender}
        />
        <Button
          text="Registrarse"
          onPress={handleRegister}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          text="Regresar"
          onPress={() => navigation.navigate("Inicio")}
          style={styles.backButton}
          textStyle={styles.backButtonText}
        />
      </View>
    </>
  );
}
