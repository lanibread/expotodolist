import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { CheckBox, Input, Button, Text } from '@rneui/themed';

export default function App() {
  const [tasks, setTasks] = useState([
    { key: '1', description: 'Learn React Native', completed: false},
    { key: '2', description: 'Master FlatList', completed: true},
  ]);

  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim().length > 0) {
      const newTask = {
        key: Math.random().toString(),
        description: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText('');
    }
  };

  const toggleTask = (key) => {
    setTasks(tasks.map(task =>
      task.key === key ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderItem = ({ item }) => (
    <CheckBox
      title={
        <Text style={
          item.completed
            ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginLeft: 10, color: 'gray' }
            : { marginLeft: 10 }
        }>
          {item.description}
        </Text>
      }
      checked={item.completed}
      onPress={() => toggleTask(item.key)}
    />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.header}>My Tasks</Text>

    <View style={styles.inputContainer}>
      <Input
        placeholder="New Task..."
        value={inputText}
        onChangeText={setInputText}
        containerStyle={{ flex: 1 }}
      />
      <Button title="Add" onPress={addTask} />
    </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});