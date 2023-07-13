import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((prevGoals) => [
      ...prevGoals, 
      enteredGoalText
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler}
        />
        <Pressable
          style={styles.button} 
          onPress={addGoalHandler}
        >
          <Text style={styles.textButton}>Add Goals</Text>
        </Pressable>
      </View>

      <View>
        {courseGoals.map((goal, idx) => (
          <View key={idx} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 80,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    textAlign: 'center'
  },
  textButton: {
    color: '#ffffff'
  },
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20
  },
  textInput: {
    borderRadius: 10,
    padding: 3,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%'
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  goalText: {
    color: '#ffffff'
  }
})
