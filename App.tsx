import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>test</Text>
      </View>
      <Text style={styles.text}>Hello world with
        <Text style={styles.hoidanit}> hoidanit</Text>
      </Text>
    </View>
  );
}

//css-in-js /styled component
const styles = StyleSheet.create({
  hoidanit: {
    color: "green",

  },

  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60, color: "red"
  },
});
