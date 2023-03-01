import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import data from "../data";
const Comments = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(null);

  useEffect(() => {
    console.log(data.player);
  }, []);

  return (
    <View style={styles.dis}>
      <Text style={styles.player2}>
        {data.player.map((item, i) => (
          <View style={styles.button} key={i}>
            <Text
              style={styles.btn}
              color="#999118"
              key={i}
              onPress={() => setModalVisible(item.card)}
            >
              {item.name} --- {item.image}
            </Text>
          </View>
        ))}
      </Text>
      {modalVisible !== null && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible !== null ? true : false}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible("");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{modalVisible.title}</Text>
              <Image style={styles.image} source={modalVisible.image}></Image>
            </View>
          </View>
        </Modal>
      )}
      <View>
        <Button
          color="orange"
          title="صفحه صاحب کافه"
          onPress={() => {
            navigation.navigate("صفحه صاحب کافه");
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 180,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
  },
  image1: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
