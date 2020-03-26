import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Open up App.js to start working on your app, xoxo</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  render () {
    return(
      <View style={styles.container}>
        <Text>
          Guess my number....
        </Text>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ff33ff',
    fontSize: 30,
  }
});
