import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
    color: "#fff",
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "justify",
    paddingHorizontal: 12,
  },
  createAccount: {
    paddingTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
});
