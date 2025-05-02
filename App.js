import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const handleRemoveGoal = (goal) => {
    setGoals((prev) => prev.filter((curr) => curr.text !== goal));
  };

  const addGoalHandler = (goal) => {
    if (!goal) {
      return;
    }
    setGoals((prev) => [...prev, { text: goal, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#cccccc",
          paddingBottom: 20,
          fontSize: 25,
          marginBottom: 25,
          textAlign: "center",
        }}
      >
        Goal Tracker
      </Text>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc",
            paddingBottom: 20,
            fontSize: 20,
          }}
        >
          List of goals
        </Text>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              handleRemoveGoal={handleRemoveGoal}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
