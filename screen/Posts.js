import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import data from "../data";

export default function Posts({ navigation }) {
  // data.player.map((item) => {
  //   const randomCard = (player, cards) => {
  //     if (player && cards && player.length === cards.length) {
  //       for (let i = 0; i < player.length; i++) {
  //         let currentPlayer = player[i];
  //         let randomIndex = Math.floor(Math.random() * cards.length);
  //         player = player.map((x) =>
  //           x.id === currentPlayer.id ? { ...x, card: cards[randomIndex] } : x
  //         );
  //         cards.splice(randomIndex, 1);
  //       }
  //     }
  //   };
  // });

  var [godfather, setGodfather] = useState(false);
  var [saolgoodman, setSaolgoodman] = useState(false);
  var [matador, setMatador] = useState(false);
  var [normalmafia, setNormalmafia] = useState(false);
  var [professional, setProfessional] = useState(false);
  var [drwatson, setDrwatson] = useState(false);
  var [konstantin, setKonstantin] = useState(false);
  var [kain, setKain] = useState(false);
  var [nosradamoos, setNosradamoos] = useState(false);
  var [citizen1, setCitizen1] = useState(false);
  var [citizen2, setCitizen2] = useState(false);
  var [citizen3, setCitizen3] = useState(false);
  var [citizen4, setCitizen4] = useState(false);
  var [citizen5, setCitizen5] = useState(false);
  var [citizen6, setCitizen6] = useState(false);
  const [list, setList] = useState("");

  const GodFather = () => {
    {
      data.player.push(JSON.stringify({ card: "GodFather" }));
    }
  };
  const SaolGoodman = () => {
    {
      data.player.push(JSON.stringify({ card: "SaolGoodman" }));
    }
  };
  const Matador = () => {
    {
      data.player.push(JSON.stringify({ card: "Matador" }));
    }
  };
  const NormalMafia = () => {
    {
      data.player.push(JSON.stringify({ card: "NormalMafia" }));
    }
  };
  const Professional = () => {
    {
      data.player.push(JSON.stringify({ card: "Professional" }));
    }
  };
  const DrWatson = () => {
    {
      data.player.push(JSON.stringify({ card: "DrWatson" }));
    }
  };
  const Konstantin = () => {
    {
      data.player.push(JSON.stringify({ card: "Konstantin" }));
    }
  };
  const Kain = () => {
    {
      data.player.push(JSON.stringify({ card: "Kain" }));
    }
  };
  const Nosradamoos = () => {
    {
      data.player.push(JSON.stringify({ card: "Nosradamoos" }));
    }
  };
  const Citizen1 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen1" }));
    }
  };
  const Citizen2 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen2" }));
    }
  };
  const Citizen3 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen3" }));
    }
  };
  const Citizen4 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen4" }));
    }
  };
  const Citizen5 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen5" }));
    }
  };
  const Citizen6 = () => {
    {
      data.player.push(JSON.stringify({ card: "Citizen6" }));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mafia}>مافیا</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={godfather}
          onValueChange={() => {
            {
              GodFather();

              setGodfather(!godfather);
            }
          }}
        />
        <Text style={styles.paragraph}>پدرخوانده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={saolgoodman}
          onValueChange={() => {
            {
              SaolGoodman();

              setSaolgoodman(!saolgoodman);
            }
          }}
        />
        <Text style={styles.paragraph}>ساول گودمن</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={matador}
          onValueChange={() => {
            {
              Matador();
              setMatador(!matador);
            }
          }}
        />
        <Text style={styles.paragraph}>ماتادور</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={normalmafia}
          onValueChange={() => {
            {
              NormalMafia();
              setNormalmafia(!normalmafia);
            }
          }}
        />
        <Text style={styles.paragraph}>مافیای ساده</Text>
      </View>
      <Text style={styles.mafia}>شهروند</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={professional}
          onValueChange={() => {
            {
              Professional();
              setProfessional(!professional);
            }
          }}
        />
        <Text style={styles.paragraph}>ل‍ون</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={drwatson}
          onValueChange={() => {
            {
              DrWatson();
              setDrwatson(!drwatson);
            }
          }}
        />
        <Text style={styles.paragraph}>دکتر واتسون</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={konstantin}
          onValueChange={() => {
            {
              Konstantin();
              setKonstantin(!konstantin);
            }
          }}
        />
        <Text style={styles.paragraph}>کنستانتین</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={kain}
          onValueChange={() => {
            {
              Kain();
              setKain(!kain);
            }
          }}
        />
        <Text style={styles.paragraph}>همشهری کین</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={nosradamoos}
          onValueChange={() => {
            {
              Nosradamoos();
              setNosradamoos(!nosradamoos);
            }
          }}
        />
        <Text style={styles.paragraph}>نوسراداموس</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen1}
          onValueChange={() => {
            {
              Citizen1();
              setCitizen1(!citizen1);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen2}
          onValueChange={() => {
            {
              Citizen2();
              setCitizen2(!citizen2);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen3}
          onValueChange={() => {
            {
              Citizen3();
              setCitizen3(!citizen3);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen4}
          onValueChange={() => {
            {
              Citizen4();
              setCitizen4(!citizen4);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen5}
          onValueChange={() => {
            {
              Citizen5();
              setCitizen5(!citizen5);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={citizen6}
          onValueChange={() => {
            {
              Citizen6();
              setCitizen6(!citizen6);
            }
          }}
        />
        <Text style={styles.paragraph}>شهروند ساده</Text>
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Comments");
          randomCard();
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    marginBottom: 5,
  },
  paragraph: {
    textAlign: "center",
    flex: 1,
    fontSize: 25,
  },
  checkbox: {},
  mafia: {
    fontSize: 50,
    textAlign: "right",
  },
});
