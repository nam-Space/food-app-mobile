
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('')

  const [todoList, setTodoList] = useState([
    {
      id: 1, title: 'React Native 1'
    },
    {
      id: 2, title: 'React Native 2'
    },
    {
      id: 3, title: 'React Native 3'
    },
    {
      id: 4, title: 'React Native 4'
    },
    {
      id: 5, title: 'React Native 5'
    },
    {
      id: 6, title: 'React Native 6'
    },
    {
      id: 7, title: 'React Native 7'
    },
    {
      id: 8, title: 'React Native 8'
    },
    {
      id: 9, title: 'React Native 9'
    },
    {
      id: 10, title: 'React Native 10'
    },
  ])

  return (
    <View style={styles.container}>
      <Text>Hello world with Nam!</Text>
      <TextInput
        value={name}
        onChangeText={v => setName(v)}
        autoCapitalize='none'
        style={{
          borderColor: 'violet',
          borderWidth: 1,
          padding: 10
        }} />
      <Text>{name}</Text>
      <Button title='Add new' onPress={() => alert('click me')} />
      <FlatList style={{ marginTop: 20 }} data={todoList} keyExtractor={item => item.id + ""} renderItem={({ item }) => {
        return (
          <Text style={styles.todo}>{item.title}</Text>
        )
      }} />
      {/* <ScrollView >
        {todoList.map((todo) => (
          <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 60,
    color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50
  },
  todo: {
    backgroundColor: 'pink',
    padding: 20,
    marginBottom: 20,
  }
});
