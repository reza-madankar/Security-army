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
          room: "900",
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
        <Text style={styles.title}>Security Army</Text>
        <TextInput
          placeholderTextColor="white"
          placeholder="اسم بازیکن ها رو تایپ کنید"
          style={styles.TextInput}
          onSubmitEditing={play}
          onChangeText={(item) => setPlayerName(item)}
          value={playerName}
        ></TextInput>
        <Button
          color="#999118"
          title="اضافه کردن"
          style={styles.btn}
          key={data.player}
          onPress={play}
        ></Button>
        <Text
          style={styles.counter}
        >{`تعداد بازیکن ها : ${player.length}`}</Text>

        <View style={styles.playerName}>
          {player.map((item) => (
            <>
              <Text style={styles.button}>
                <View style={styles.delButton}>
                  <Button
                    color="#999118"
                    title="X"
                    onPress={() => removePlayer(item.id)}
                  ></Button>
                </View>
                {item.name}
              </Text>
            </>
          ))}
        </View>

        {player && player.length > 0 && (
          <Button
            color="orange"
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
    backgroundColor: "#3f3f3f",
  },
  TextInput: {
    backgroundColor: "##3f3f3f",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "right",
    color: "white",
  },
  title: {
    backgroundColor: "#3f3f3f",
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  playerName: {
    backgroundColor: "#3f3f3f",
  },
  delButton: {},
  button: {
    color: "white",
    fontSize: 25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    margin: 5,
  },
  counter: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  cards: {
    fontSize: 25,
    margin: 20,
  },
});

export default Home;
