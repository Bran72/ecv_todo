import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox'
import Task from "./src/components/Task";

export default function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const newTask = new Task()
    newTask.label = 'toto'
    newTask.content = 'toto'
    console.log(newTask)
    setTodo([newTask])
  }, [])

  const onTodoCheck = (item) => {
    item.status = !item.status
    console.log(item)
  }

  return (
    <View style={styles.container}>
      <View style={{
        flex: 2,
        backgroundColor: 'red'
      }}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: 'green'
        }}
      >
        <FlatList
          contentContainerStyle={{
            alignContent: 'center',
            justifyContent: 'center'
          }}
          data={todo}
          renderItem={({item}) =>
              <TouchableOpacity
                onPress={() => onTodoCheck(item)}
                style={{backgroundColor: item.status ? 'yellow' : 'brown'}}>
                <Text style={{fontWeight: 'bold'}}>{item.label}</Text>
                <Text>{item.content} - {item.created_at.toLocaleDateString()}</Text>
              </TouchableOpacity>
          }
          keyExtractor={(item, key) => key.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
