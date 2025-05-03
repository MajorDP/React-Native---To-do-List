import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const hideModal = () => {
    setIsOpenModal(false);
  };

  const handleRemoveGoal = (id) => {
    setGoals((prev) => prev.filter((curr) => curr.id !== id));
  };

  const addGoalHandler = (goal) => {
    if (!goal) {
      return;
    }
    setGoals((prev) => [...prev, { text: goal, id: Math.random().toString() }]);
    hideModal();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/goal.png")}
      />
      <Text style={styles.heading}>Goal Tracker</Text>

      <Button title="Add New Goal" color="blue" onPress={showModal} />
      {isOpenModal && (
        <GoalInput
          isOpen={isOpenModal}
          onHideModal={hideModal}
          addGoalHandler={addGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc",
            color: "white",
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
              id={itemData.item.id}
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
    backgroundColor: "#832ccc",
  },
  heading: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
    fontSize: 25,
    marginBottom: 32,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 32,
  },
});
