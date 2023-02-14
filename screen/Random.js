import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import data from "../data";

const Random = ({ navigation }) => {
  const Pressable = () => {
    navigation.navigate("کارت آخر");
    alert(10);
  };
  return (
    <ScrollView>
      <View style={styles.player}>
        <Text style={styles.player1}>
          {data.player.map((item) => (
            <View>
              <Text
                style={styles.player2}
              >{`        ${item.card}          :        ${item.name}             `}</Text>
            </View>
          ))}
        </Text>
        <Button
          onPress={() => {
            Pressable();
          }}
          style={styles.button}
          title="کارت حرکت آخر"
        ></Button>
      </View>
    </ScrollView>
  );
};

export default Random;

const styles = StyleSheet.create({
  player: {},
  player1: {},
  player2: { fontSize: 20, textAlign: "center", marginTop: 30 },
  button: {},
});
