import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, handleRemoveGoal }) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "white", fontSize: 15 }}>{text}</Text>
      <Pressable
        onPress={() => handleRemoveGoal(id)}
        android_ripple={styles.onPressed}
        style={({ pressed }) => (pressed ? styles.onPressed : {})}
      >
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>✖</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262ccc",
    marginVertical: 10,
    padding: 8,
    fontSize: 20,
    borderRadius: 8,
  },
  onPressed: {
    backgroundColor: "black",
    borderRadius: 8,
  },
});

export default GoalItem;
