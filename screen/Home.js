import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import data from "../data";

const Home = ({ navigation }) => {
  const [list, setList] = useState("");
  const play = () => {
    setList("");
    {
      data.player.push({ name: list });
    }
  };
  const press = () => {
    play();
  };
  const del = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GodFather</Text>
      <Text style={styles.playerName}>Add player</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={(item) => setList(item)}
        value={list}
      ></TextInput>
      <Button title="Add" onPress={press}></Button>
      {data.player.map((item) => (
        <Text style={styles.button}>{item.name}</Text>
      ))}
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Posts");
        }}
      ></Button>
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
    borderWidth: 1,
    borderColor: "black",
    width: 265,
    height: 40,
    borderRadius: 10,
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
