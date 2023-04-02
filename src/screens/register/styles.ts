import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#48B0D9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ccc",
  },
  backButtonText: {
    color: "gray",
    textAlign: "center",
  },
});
