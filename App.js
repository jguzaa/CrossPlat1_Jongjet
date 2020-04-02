import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Open up App.js to start working on your app, xoxo</Text>
//     </View>
//   );
// }

export default class Game extends Component {
//set initial state
state = { // state is the obj
  secret: 0,
  input: '',
  feedback: ''
}

//function to gen random no
genRandom(){
  return Math.round(Math.random() * 100) //we can use only bracket too
}

//function to initialize the game
init(){
  const secretNo = this.genRandom()
  this.setState({secret: secretNo})
}

//lifecycle fn
componentDidMount(){
  this.init()

}

//update input state
updateInput = (value) => {
  this.setState({input: value})
}

//check no fn
chkGuess = () => {
  const userGuess = parseInt(this.state.input)
  const secretNo = this.state.secret
  if (userGuess == secretNo){
    //feedback
    this.setState({feedback: 'Correct! the ans is ' + secretNo})
  }
  if (userGuess < secretNo){
    this.setState({feedback: "It's smaller than " + userGuess})
  }
  if (userGuess > secretNo){
    this.setState({feedback: "It's larger than " + userGuess + ' ' +secretNo})
  }
  return
}

  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Guess the number....
        </Text>

        <TextInput 
        style={styles.input} 
        keyboardType='number-pad'
        onChangeText={this.updateInput}>
        </TextInput>

        <TouchableHighlight 
        style={styles.btn}
        underlayColor='white'
        onPress={this.chkGuess}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <Text style={styles.text}>
          {this.state.feedback}
        </Text>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({

  btn:{
    width: 100,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'white',
    fontSize: 30
  },
  input:{
    backgroundColor: 'gray',
    width: 100,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    padding: 10
  }
});
