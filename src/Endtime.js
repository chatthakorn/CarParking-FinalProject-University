import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Started extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LicensePlate: ""
    };
  }

  confirm = () => {
    alert(`ทะเบียนรถของคุณ : ${this.state.LicensePlate}`);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>กรุณากรอกทะเบียนรถของท่าน</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={LicensePlate => this.setState({ LicensePlate })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={this.confirm}>
            <Text style={{ color: "#fff" }}>ดำเนินการต่อ</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
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
    color: "#fff",
    fontSize: 20,
    marginBottom: 20
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#1A237E",
    padding: 10,
    alignItems: "center"
  }
});
