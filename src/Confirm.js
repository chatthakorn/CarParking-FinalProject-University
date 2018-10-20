import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

export default class Location extends React.Component {
  fn = () => {
    this.props.navigation.navigate("Endtime");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ข้อมูลการสั่งจอง</Text>
        <Image source={require("./qrcode.png")} style={styles.picture} />
        <TouchableOpacity style={styles.btn} onPress={this.fn}>
          <Text style={{ color: "#fff" }}>ส่งคืน</Text>
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
    fontSize: 24,
    color: "#fff"
  },
  picture: {
    marginTop: 20,
    height: 250,
    width: 250
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
