import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ addGoalHandler }) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal..."
        style={styles.textInput}
        value={goal}
        onChangeText={(val) => goalInputHandler(val)}
      />
      <Button
        title="Add goal"
        onPress={() => {
          addGoalHandler(goal);
          setGoal("");
        }}
        disabled={!goal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default GoalInput;
