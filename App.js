import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Posts from "./screen/Posts";
import Comments from "./screen/Comments";
import Random from "./screen/Random";
import Cards from "./screen/cards";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="بازیکن ها" component={Home} />
        <Stack.Screen name="انتخاب نقش ها" component={Posts} />
        <Stack.Screen name="تقسیم نقش ها" component={Comments} />
        <Stack.Screen name="صفحه راوی" component={Random} />
        <Stack.Screen name="کارت آخر" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
