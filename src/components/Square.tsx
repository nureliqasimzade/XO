import { Text, TouchableOpacity } from "react-native";

type SquareProps = {
  value: string;
  onPress: () => void;
};

export default function Square({ value, onPress }: SquareProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>{value}</Text>
    </TouchableOpacity>
  );
}