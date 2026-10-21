import { useState } from "react";
import { Button, Text, View } from "react-native";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
  const [isX, setIsX] = useState<boolean>(true);

  function checkWinner() {
    if (squares[0] !== "" && squares[0] === squares[1] && squares[0] === squares[2]) return squares[0];
    if (squares[3] !== "" && squares[3] === squares[4] && squares[3] === squares[5]) return squares[3];
    if (squares[6] !== "" && squares[6] === squares[7] && squares[6] === squares[8]) return squares[6];
    if (squares[0] !== "" && squares[0] === squares[3] && squares[0] === squares[6]) return squares[0];
    if (squares[1] !== "" && squares[1] === squares[4] && squares[1] === squares[7]) return squares[1];
    if (squares[2] !== "" && squares[2] === squares[5] && squares[2] === squares[8]) return squares[2];
    if (squares[0] !== "" && squares[0] === squares[4] && squares[0] === squares[8]) return squares[0];
    if (squares[2] !== "" && squares[2] === squares[4] && squares[2] === squares[6]) return squares[2];
    return "";
  }

  function checkDraw() {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === "") {
        return false;
      }
    }
    return true;
  }

  const winner = checkWinner();
  const draw = winner === "" && checkDraw();

  function handlePress(index: number) {
    if (squares[index] !== "" || winner !== "") {
      return;
    }

    const newSquares: string[] = [];
    for (let i = 0; i < 9; i++) {
      newSquares[i] = squares[i];
    }

    if (isX) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }

    setSquares(newSquares);
    setIsX(!isX);
  }

  function restart() {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setIsX(true);
  }

  let status = "";
  if (winner !== "") {
    status = winner + " qalib oldu!";
  } else if (draw) {
    status = "Heç-heçə!";
  } else if (isX) {
    status = "Növbə: X";
  } else {
    status = "Növbə: O";
  }

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>{status}</Text>

      <View style={{ flexDirection: "row" }}>
        <Square value={squares[0]} onPress={() => handlePress(0)} />
        <Square value={squares[1]} onPress={() => handlePress(1)} />
        <Square value={squares[2]} onPress={() => handlePress(2)} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Square value={squares[3]} onPress={() => handlePress(3)} />
        <Square value={squares[4]} onPress={() => handlePress(4)} />
        <Square value={squares[5]} onPress={() => handlePress(5)} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Square value={squares[6]} onPress={() => handlePress(6)} />
        <Square value={squares[7]} onPress={() => handlePress(7)} />
        <Square value={squares[8]} onPress={() => handlePress(8)} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Yenidən başla" color="deeppink" onPress={restart} />
      </View>
    </View>
  );
}