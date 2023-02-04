import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Switch,
  Alert,
} from "react-native";
import data from "../data";

export default function Posts({ navigation }) {
  const [selectedCard, setSelectedCard] = useState([]);

  const selectCard = (title) => {
    if (selectedCard.includes(title)) {
      setSelectedCard(selectedCard.filter((item) => item !== title));
    } else {
      setSelectedCard([...selectedCard, title]);
    }
  };

  const randomCard = () => {
    if (data.player.length !== selectedCard.length) {
      Alert.alert(
        `Player: ${data.player.length} - Card Selected: ${selectedCard.length} `
      );
    } else {
      let cards = selectedCard;

      for (let i = 0; i < data.player.length; i++) {
        let currentPlayer = data.player[i];
        let randomIndex = Math.floor(Math.random() * cards.length);

        data.player = data.player.map((x) =>
          x.id === currentPlayer.id ? { ...x, card: cards[randomIndex] } : x
        );
        cards.splice(randomIndex, 1);
      }

      navigation.navigate("Comments");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mafia}>مافیا</Text>

      {data.cardName.map((item) => (
        <View style={styles.section}>
          <Text>{item.placeHolder} </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={
              selectedCard.includes(item.title) ? "#2986cc" : "#f4f3f4"
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              selectCard(item.title);
            }}
            value={selectedCard.includes(item.title)}
          />
        </View>
      ))}

      {selectedCard && selectedCard.length > 0 && (
        <Button
          title="Next"
          onPress={() => {
            randomCard();
          }}
        ></Button>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    textAlign: "center",
    flex: 1,
    fontSize: 25,
  },
  select: {
    backgroundColor: "blue",
  },
  mafia: {
    fontSize: 50,
    textAlign: "right",
  },
});
