import Board from "@/components/Board";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingTop: 20 }}>
      <Board />
    </View>
  );
}