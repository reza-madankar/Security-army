import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Posts from "./screen/Posts";
import Comments from "./screen/Comments";
import Random from "./screen/Random";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="Random" component={Random} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
