import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: ""
    };
  }

  onValueChange(key, value) {
    this.setState({ startTime: value });
  }

  render() {
    return (
      <View>
        <Text style={styles.txt}>เริ่มต้น</Text>
        <Text style={{ color: "#ffffff" }}>เวลา</Text>
        <Picker
          mode="dropdown"
          selectedValue={this.state.startTime}
          onValueChange={this.onValueChange.bind(this, "startTime")}
        >
          <item label="00.00" value="00.00น." />
          <item label="01.00" value="01.00น." />
          <item label="02.00" value="02.00น." />
          <item label="03.00" value="03.00น." />
        </Picker>
        <Text style={{ color: "#fff" }}>
          เวลาเริ่มต้นของคุณ : {this.state.startTime}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 5
  }
});
