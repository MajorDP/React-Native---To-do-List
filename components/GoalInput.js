import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({ isOpen, onHideModal, addGoalHandler }) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your goal..."
          style={styles.textInput}
          value={goal}
          onChangeText={(val) => goalInputHandler(val)}
        />
        <View style={styles.buttonsArea}>
          <Button
            title="Add goal"
            color="#262ccc"
            onPress={() => {
              addGoalHandler(goal);
              setGoal("");
            }}
            disabled={!goal}
          />
          <Button title="Cancel" color="red" onPress={onHideModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#832ccc",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#832ccc",
    margin: "0 auto",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    color: "white",
    width: "90%",
    borderRadius: 8,
    marginRight: 8,
    padding: 8,
  },
  buttonsArea: {
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
  },
});

export default GoalInput;
