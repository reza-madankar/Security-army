import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import data from "../data";

const Comments = ({ navigation }) => {


  return (
    <View style={styles.dis}>
      <Text>
        {data.player.map((item) => (
          <Text
            style={styles.player}
            onPress={() => {
              alert(item.card);
            }}
          >
            {"                             "}
            {item.name}
            {"                             "}
          </Text>
        ))}
      </Text>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Random");
        }}
      ></Button>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  player: {
    fontSize: 40,
    padding: 40,
    margin: 40,
    flex: 1,
    color: "red",
  },
  player1: {},
  dis: {},
});
