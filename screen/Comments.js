import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import data from "../data";

const Comments = ({ navigation }) => {
  return (
    <View style={styles.dis}>
      <Text style={styles.player2}>
        {data.player.map((item) => (
          <View style={styles.button}>
            <Text
              style={styles.btn}
              color="#999118"
              key={data.endCards}
              onPress={() => {
                Alert.alert(item.card);
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </Text>
      <View>
        <Button
          color="orange"
          title="صفحه راوی"
          onPress={() => {
            navigation.navigate("صفحه راوی");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  dis: { backgroundColor: "#3f3f3f" },
  player2: { marginTop: 20, backgroundColor: "#3f3f3f" },
  button: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    alignContent: "center",

    alignItems: "center",
  },
  mafia: {
    fontSize: 50,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  },
  btn: {
    fontSize: 45,
    color: "black",
    margin: 10,
    padding: 10,
    backgroundColor: "#999118",
    
  },
});
