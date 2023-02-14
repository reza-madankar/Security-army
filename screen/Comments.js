import { StyleSheet, Text, View, Button, Alert } from "react-native";
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
              Alert.alert(item.card);
            }}
          >
            {item.name}
            {"                                       "}
          </Text>
        ))}
      </Text>
      <Button
        title="صفحه راوی"
        onPress={() => {
          navigation.navigate("صفحه راوی");
        }}
      ></Button>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  player: {
    textAlign: "center",
    fontSize: 40,
    padding: 40,
    margin: 40,
    flex: 1,
    color: "black",
  },
  player1: {},
  dis: {},
});
