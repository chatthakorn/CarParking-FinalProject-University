import React from "react";
import { StyleSheet, Text, View, Picker, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Start from "./Components/Start";
import End from "./Components/End";
import Location from "./Components/Location";

export default class Reservation extends React.Component {
  btn = () => {
    this.props.navigation.navigate("Confirm");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>การจอง</Text>
        <View>
          <Start />
        </View>
        <View>
          <End />
        </View>
        <View>
          <Location />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.btn}>
          <Text style={{ color: "#fff" }}>สั่งจอง</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 10
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#1A237E",
    padding: 10,
    alignItems: "center",
    marginTop: 15,
    marginTop: 80
  }
});
