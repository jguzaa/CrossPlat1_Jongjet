import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Game extends Component {

//set initial state
state = { // state is the obj
  secret: 0,
  input: '',
  feedback: '',
  isRunning: true,
  attempt: 5
}

//function to gen random no
genRandom(){
  return Math.round(Math.random() * 100) //we can use only bracket too
}

//function to initialize the game
init(){
  const secretNo = this.genRandom()
  this.setState({secret: secretNo})
  //reset state
  this.setState({isRunning: true})
  this.setState({attempt: 5})
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
  const isRunning = this.state.isRunning

  while(isRunning){

    if (this.state.attempt > 1){

      if (userGuess == secretNo){
        //feedback
        this.setState({feedback: 'Correct! the answer is ' + secretNo})
        this.init()
      }
      else if (userGuess < secretNo){
        this.setState({feedback: "It's larger than " + userGuess})
      }
      else {
        this.setState({feedback: "It's smaller than " + userGuess})
      }
      this.state.attempt--;

    } else {
      this.setState({feedback: "You lose, the answer is " + secretNo})
      this.init()
    }

    this.updateInput
    this.textInput.clear()

    return
  }

  this.textInput.clear()
  return
  
}

  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          Guess the number...
        </Text>

        <Text style={styles.text}>
          Attempt left {this.state.attempt}
        </Text>

        <TextInput 
        style={styles.input} 
        ref={inputField => { this.textInput = inputField }}
        keyboardType='number-pad'
        onChangeText={this.updateInput}>
        </TextInput>

        <TouchableHighlight 
        style={styles.btn}
        underlayColor='#A9A9A9'
        onPress={
          this.chkGuess}>
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
    marginBottom: 10,
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
