import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    height: 80,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 5,
    paddingTop: 5,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#48B0D9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "justify",
    paddingHorizontal: 12,
  },
});
