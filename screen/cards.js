import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  Pressable,
} from "react-native";
import data from "../data";

const Cards = () => {
  const onPressLastCard = (endCardTitle, placeHolder) => {
    data.endCards.filter((x) => x.title === endCardTitle)[0];

    var randomPlaceHolder = Math.floor(
      Math.random() * data.endCardsPlaceHolder.length
    );
    alert(JSON.stringify(data.endCardsPlaceHolder[randomPlaceHolder]));
  };

  return (
    <View style={styles.cards}>
      {data.endCards.map((item) => (
        <Button
          title={item.title}
          onPress={() => {
            onPressLastCard(item.title);
          }}
        ></Button>
      ))}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cards: {
    textAlign: "center",
    justifyContent: "center",
  },
  image: {
    textAlign: "center",
    width: 120,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
