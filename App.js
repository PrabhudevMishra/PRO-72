import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {
    screen: WriteStoryScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/write.png")}
          style={{ width: 32, height: 32 }}
        />
      ),
      tabBarLabel: "Write a Story",
    },
  },
  ReadStory: {
    screen: ReadStoryScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/read.png")}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: "Read a Story",
    },
  },
});
const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});