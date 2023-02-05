import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import data from "../data";

const Comments = ({ navigation }) => {
  return (
    <View style={styles.dis}>
      <Text>
        {data.player.map((item) => (
          <Button
            title={item.name}
            onPress={() => {
              Alert.alert(item.card);
            }}
          ></Button>
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
    fontSize: 60,
  },
  player1: {},
  dis: {},
});
