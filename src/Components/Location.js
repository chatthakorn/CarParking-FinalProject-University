import React from "react";
import { StyleSheet, Text, View, Picker, TouchableOpacity } from "react-native";

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location1: "",
      location2: "",
      location3: "",
      location4: "",
      location5: "",
      location6: "",
      location: ""
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    fetch("http://10.0.7.133:3000/location")
      .then(res => res.json())
      .then(data => {
        this.setState({ location1: data[0].parking_lot });
        this.setState({ location2: data[1].parking_lot });
        this.setState({ location3: data[2].parking_lot });
        this.setState({ location4: data[3].parking_lot });
        this.setState({ location5: data[4].parking_lot });
        this.setState({ location6: data[5].parking_lot });
      });
  }

  onValueChange(key, value) {
    this.setState({ location: value });
  }

  render() {
    let {
      location1,
      location2,
      location3,
      location4,
      location5,
      location6
    } = this.state;
    return (
      <View>
        <Text style={styles.txt}>สถานที่</Text>
        <Picker
          mode="dropdown"
          selectedValue={this.state.location}
          onValueChange={this.onValueChange.bind(this, "location")}
        >
          <item label={location1} value={location1} />
          <item label={location2} value={location2} />
          <item label={location3} value={location3} />
          <item label={location4} value={location4} />
          <item label={location5} value={location5} />
          <item label={location6} value={location6} />
        </Picker>
        <Text style={{ color: "#fff" }}>{this.state.location}</Text>
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
