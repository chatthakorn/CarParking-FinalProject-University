import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this._loadInitualState().done();
  }

  _loadInitualState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("Profile");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wapper}>
        <View style={styles.container}>
          <Text style={styles.header}>เข้าสู่ระบบ</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text style={{ color: "#fff" }}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={this.facebook}>
            <Text style={{ color: "#fff" }}>เข้าสู่ระบบด้วย Facebook</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
    // check username
    fetch("http://10.0.7.133:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message);
        if (res.success === true) {
          AsyncStorage.setItem("user", res.user);
          this.props.navigation.navigate("Profile");
        } else {
          alert(res.message);
        }
      })
      .done();
  };

  /*facebook = () => {
        fetchetch('http://192.168.43.32/test.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: "test"
            })
        })
            .then((response) => response.json())
            .then((res) => {
                alert(res.message);
            })
            .done();
    }*/
}

const styles = StyleSheet.create({
  wapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    fontSize: 24,
    marginBottom: 35,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#16a085",
    padding: 10,
    alignItems: "center"
  },
  btn2: {
    alignSelf: "stretch",
    backgroundColor: "#1A237E",
    padding: 10,
    alignItems: "center",
    marginTop: 15
  }
});
