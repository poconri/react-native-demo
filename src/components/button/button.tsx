import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

export interface ButtonProps {
  text: string;
  onPress: () => void;
  style: ViewStyle;
  textStyle: TextStyle;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={[props.style]} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};
