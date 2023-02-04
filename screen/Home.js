import { useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import data from "../data";

const Home = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");

  const play = () => {
    if (playerName.length > 0) {
      const playerId =
        data.player && data.player.length > 0
          ? data.player[data.player.length - 1].id + 1
          : 1;
      data.player.push({
        name: playerName,
        id: playerId,
        card: "",
        visible: false,
      });
      setPlayerName("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GodFather</Text>
      <TextInput
        placeholder="Add player"
        style={styles.TextInput}
        onChangeText={(item) => setPlayerName(item)}
        value={playerName}
      ></TextInput>
      <Button title="Add" style={styles.btn} onPress={play}></Button>
      {data.player.map((item) => (
        <Text
          style={styles.button}
        >
          {item.name}
        </Text>
      ))}
      {data.player && data.player.length > 0 && (
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate("Posts");
          }}
        ></Button>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 265,
    height: 40,
    borderRadius: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 60,
    textAlign: "center",
  },
  playerName: {
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default Home;
