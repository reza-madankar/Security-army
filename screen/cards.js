import { Button, StyleSheet, Text, Alert, View, Image } from "react-native";
import React from "react";
import data from "../data";

const Cards = () => {
  const randomcard = () => {
    alert();
  };
  return (
    <View style={styles.cards}>
      {data.endCards.map((item) => (
        <Button
          title={item.title}
          onPress={() => {
            Alert.alert(item.placeHolder);
          }}
        >
          <Image
            style={styles.image}
            source={require("../mafiacard.jpg")}
          ></Image>
          ;
        </Button>
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
    width: 120,
    height: 130,
  },
});
