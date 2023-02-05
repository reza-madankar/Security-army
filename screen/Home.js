import { useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
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
      <ScrollView>
        <Text style={styles.title}>GodFather</Text>
        <TextInput
          placeholder="نام بازیکن را وارد کنید"
          style={styles.TextInput}
          onChangeText={(item) => setPlayerName(item)}
          value={playerName}
        ></TextInput>
        <Text style={styles.counter}>{`تعدادبازیکن های انتخاب شده  : ${[
          data.player.length,
        ]}`}</Text>
        <Button title="اضافه کردن" style={styles.btn} onPress={play}></Button>
        {data.player.map((item) => (
          <Text style={styles.players}>{item.name}</Text>
        ))}

        {data.player && data.player.length > 0 && (
          <Button
            title="انتخاب نقش ها"
            onPress={() => {
              navigation.navigate("انتخاب نقش ها");
            }}
          ></Button>
        )}
      </ScrollView>
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
    textAlign: "center",
  },
  title: {
    fontSize: 60,
    textAlign: "center",
  },
  counter: {
    fontSize: 20,
    textAlign: "center",
  },
  playerName: {
    fontSize: 25,
    textAlign: "center",
  },
  players: {
    textAlign: "right",
    fontSize: 30,
  },
  button: {
    fontSize: 40,
    textAlign: "right",
  },
});

export default Home;
