import { StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../data";
data;
const Comments = () => {
  return (
    <View>
      <Text style={styles.player1}>
        {data.player.map((item) => (
          <Text style={styles.player}>
            {item.name}
            {"   "}
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  player: {
    fontSize: 40,
    borderColor: "black",
    borderWidth: 2,
    width: 20,
    height: 40,
  },
  player1: {},
});
