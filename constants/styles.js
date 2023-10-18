import { StyleSheet } from "react-native";
export const Colors = {
  primary200: "#FACBEA",
  primary500: "#B0578D",
  primary600: "#640233",
  primary700: "#B0578D",
  primary800: "#3b021f",
  accent200: "#FFE4D6",
};

export const GeneralStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.primary600,
    fontWeight: "bold",
  },
});

export const Padding = {
  sm: 10,
  md: 15,
  lg: 20,
};
