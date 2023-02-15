import { useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import data from "../data";
const Home = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");
  const [player, setPlayer] = useState([]);
  const play = () => {
    if (playerName.length > 0) {
      const playerId =
        player && player.length > 0 ? player[player.length - 1].id + 1 : 1;

      setPlayer([
        ...player,
        {
          name: playerName,
          id: playerId,
          card: "",
          visible: false,
        },
      ]);

      setPlayerName("");
    }
  };

  const removePlayer = (id) => {
    setPlayer(player.filter((x) => x.id !== id));
  };

  const nextPage = () => {
    if (player.length > 0) {
      data.player = player;
      navigation.navigate("انتخاب نقش ها");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>پدرخوانده</Text>
        <TextInput
          placeholder="اسم بازیکن ها رو تایپ کنید"
          style={styles.TextInput}
          onChangeText={(item) => setPlayerName(item)}
          value={playerName}
        ></TextInput>
        <Text
          style={styles.counter}
        >{`تعداد بازیکن ها : ${player.length}`}</Text>
        <Button title="اضافه کردن" style={styles.btn} onPress={play}></Button>
        {player.map((item) => (
          <>
            <Text style={styles.button}>{item.name}</Text>
            <Button title="حذف" onPress={() => removePlayer(item.id)}></Button>
          </>
        ))}
        {player && player.length > 0 && (
          <Button
            title="انتخاب نقش ها"
            onPress={() => {
              nextPage();
            }}
          ></Button>
        )}
      </SafeAreaView>
    </ScrollView>
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
    marginBottom: 20,
    textAlign: "right",
    marginTop: 20,
  },
  title: {
    fontSize: 50,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  },
  playerName: {
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    fontSize: 15,
    textAlign: "center",
  },
  counter: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cards: {
    fontSize: 25,
    margin: 20,
  },
});

export default Home;
