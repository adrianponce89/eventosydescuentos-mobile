import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { AddScheduleProps } from "../types";

//   name?: string;
//   start?: Date;
//   end?: Date;
//   location?: string;
//   description?: string;
//   photo?: string;
//   author?: {
//     id?: string;
//     name?: string;
//   };

const AddSchedule = ({ navigation }: AddScheduleProps) => {
  const handleAdd = () => {
    console.log("Add");
  };
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity style={styles.item} onPress={handleAdd}>
        <Text style={styles.title}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  title: {
    fontSize: 24,
  },
});

export default AddSchedule;
