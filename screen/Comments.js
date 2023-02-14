import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import data from "../data";

const Comments = ({ navigation }) => {
  return (
    <View style={styles.dis}>
      <Text style={styles.mafia}>تقسیم تقش ها</Text>
      <Text style={styles.player2}>
        {data.player.map((item) => (
          <View style={styles.button}>
            <Button
              onPress={() => {
                Alert.alert(item.card);
              }}
              title={item.name}
            ></Button>
          </View>
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
  player: {},
  player2: { marginTop: 20 },
  button: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    margin: 15,
  },
  mafia: {
    fontSize: 50,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  },
});
