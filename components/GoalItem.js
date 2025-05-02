import { StyleSheet, Text, View } from "react-native";

function GoalItem({ text, handleRemoveGoal }) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "white", fontSize: 15 }}>{text}</Text>
      <Text
        style={{ fontSize: 20, color: "white" }}
        onPress={() => handleRemoveGoal(text)}
      >
        ✖
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "purple",
    marginVertical: 10,
    padding: 15,
    fontSize: 20,
    borderRadius: 8,
  },
});

export default GoalItem;
