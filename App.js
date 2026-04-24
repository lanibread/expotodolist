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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
