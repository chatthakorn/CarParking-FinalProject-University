import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

export default class End extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endTime: ""
    };
  }
  
  onValueChange(key, value) {
    console.log(`${key} : ${value}`);
    this.setState({ endTime: value });
  }

  render() {
    return (
      <View>
        <Text style={styles.txt}>สิ้นสุด</Text>
        <Text style={{ color: "#ffffff" }}>เวลา</Text>
        <Picker
          mode="dropdown"
          selectedValue={this.state.endTime}
          onValueChange={this.onValueChange.bind(this, "endTime")}
        >
          <item label="00.00" value="00.00น." />
          <item label="01.00" value="01.00น." />
          <item label="02.00" value="02.00น." />
          <item label="03.00" value="03.00น." />
        </Picker>
        <Text style={{ color: "#fff" }}>
          เวลาส่งรถคือของคุณ : {this.state.endTime}
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
