import * as React from "react";
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
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3f3f3f" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="بازیکن ها"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3f3f3f" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="انتخاب نقش ها"
          component={Posts}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3f3f3f" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="تقسیم نقش ها"
          component={Comments}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3f3f3f" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="صفحه راوی"
          component={Random}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#3f3f3f" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="کارت آخر"
          component={Cards}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
