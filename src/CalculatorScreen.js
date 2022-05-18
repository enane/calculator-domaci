import React, { Component, useState} from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from './components/Display'
import Buttons from './components/Buttons'
import colors from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';


export default function CalculatorScreen() {

  const history = []

  // const state = {
  //   display: '',
  //   result: ''
  // }

   
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

 

 const handleOperation =  operation => {

    if (operation === 'C') {
      // setState({
      //   display: '',
      //   result: ''
      // })
      setDisplay('');
      setResult('');
    }
    else if(operation === '=') {
      history.push(display + ' = ' + result)
      // setState({
      //   display: state.result,
      //   result: ''
      // })
      setDisplay(result);
      setResult('');
    }
    else if(operation === 'History') {
      // setState({
      //   display: '',
      //   result: ''
      // })
      setDisplay('');
      setResult('')
    }
    else {
      setDisplay(oldDisplay=>oldDisplay+operation);
      // const displayCon = display + operation
      // let resultLet = result
    
      try {
        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        setResult(new String(eval(fixedOperation)).toString());
        // resultLet = new String(eval(fixedOperation)).toString()
        console.log("try")
      }
      catch(e) {
        console.log("catch")
      }
      // setState({
      //   display,
      //   result
      // })
      // setDisplay(displayCon)
      // setResult(resultLet)
    }
  }


  console.log(display);
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display display={display} result={result}/>
        <Buttons operation={handleOperation} />
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: colors['grey-darker'],
    },
  });