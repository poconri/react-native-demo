import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    paddingVertical: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
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
});
