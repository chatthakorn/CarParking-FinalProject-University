import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "./src/LogIn";
import Profile from "./src/Profile";
import Reservation from "./src/Reservation";
import Confirm from "./src/Confirm";
import Endtime from "./src/Endtime";

const Appication = StackNavigator(
  {
    Home: { screen: Login },
    Profile: { screen: Profile },
    Reservation: { screen: Reservation },
    Confirm: { screen: Confirm },
    Endtime: { screen: Endtime }
  },
  {
    navigationOptions: {
      header: false
    }
  }
);

export default class App extends React.Component {
  render() {
    return <Appication />;
  }
}
