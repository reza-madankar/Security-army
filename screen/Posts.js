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

  const selectCard = (title, placeHolder) => {
    if (selectedCard.filter((x) => x.title === title).length > 0) {
      setSelectedCard(selectedCard.filter((item) => item.title !== title));
    } else {
      setSelectedCard([
        ...selectedCard,
        { title: title, placeHolder: placeHolder },
      ]);
    }
  };

  const randomCard = () => {
    if (data.player.length !== selectedCard.length) {
      Alert.alert(
        `تعداد بازیکن ها :   ${data.player.length} - تعداد کارت ها  :  ${selectedCard.length} `
      );
    } else {
      let cards = selectedCard;

      for (let i = 0; i < data.player.length; i++) {
        let currentPlayer = data.player[i];

        let randomIndex = Math.floor(Math.random() * cards.length);

        data.player = data.player.map((x) =>
          x.id === currentPlayer.id
            ? { ...x, card: cards[randomIndex].placeHolder }
            : x
        );
        cards.splice(randomIndex, 1);
      }

      navigation.navigate("تقسیم نقش ها");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mafia}>نقش ها</Text>
      {data.cardName.map((item) => (
        <View style={styles.section}>
          <Text style={styles.section1}>{item.placeHolder} </Text>
          <Switch
            style={styles.swich}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={
              selectedCard.filter((x) => x.title === item.title).length > 0
                ? "#2986cc"
                : "#f4f3f4"
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              selectCard(item.title, item.placeHolder);
            }}
            value={
              selectedCard.filter((x) => x.title === item.title).length > 0
            }
          />
        </View>
      ))}

      {selectedCard && selectedCard.length > 0 && (
        <Button
          title="تقسیم نقش ها"
          onPress={() => {
            randomCard();
          }}
        ></Button>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  section: {
    flexDirection: "row",
    fontSize: 40,
  },
  paragraph: {},
  section1: { flex: 1, fontSize: 30, textAlign: "center" },

  mafia: {
    fontSize: 50,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  },
  swich: {
    fontSize: 40,
  },
});
