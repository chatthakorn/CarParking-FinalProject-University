import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Image
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      id: ""
    };
  }

  componentDidMount() {
    this.data();
  }

  data() {
    fetch("http://10.0.7.133:3000/data")
      .then(res => res.json())
      .then(data => {
        this.setState({ firstname: data[4].first_name });
        this.setState({ lastname: data[4].last_name });
        this.setState({ id: data[4].id });
      });
  }

  render() {
    let { firstname, lastname, id } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Profile</Text>
        <Image style={styles.pic} source={require("./sample.png")} />
        <Text style={styles.name}>ชื่อ {firstname}</Text>
        <Text style={{ color: "#fff", marginTop: 5 }}>นามสกุล {lastname}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.chnagePage}>
          <Text style={{ color: "#fff" }}>สั่งจอง</Text>
        </TouchableOpacity>
      </View>
    );
  }
  chnagePage = () => {
    this.props.navigation.navigate("Reservation");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: "#fff",
    marginTop: 70,
    fontSize: 25
  },
  name: {
    marginTop: 25,
    color: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#1A237E",
    padding: 10,
    alignItems: "center",
    marginTop: 15,
    marginTop: 80
  },
  pic: {
    marginTop: 15
  },
  btn1: {
    alignSelf: "stretch",
    backgroundColor: "#1A237E",
    padding: 10,
    alignItems: "center",
    marginTop: 25,
    marginTop: 100
  }
});
