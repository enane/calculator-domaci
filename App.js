import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from './src/components/Display'
import Buttons from './src/components/Buttons'
import colors from './src/utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CalculatorScreen from './src/CalculatorScreen'

// export default class App extends Component {

//   history = []

//   state = {
//     display: '',
//     result: ''
//   }

//   handleOperation = operation => {
//     if (operation === 'C') {
//       this.setState({
//         display: '',
//         result: ''
//       })
//     }
//     else if(operation === '=') {
//       this.history.push(this.state.display + ' = ' + this.state.result)
//       this.setState({
//         display: this.state.result,
//         result: ''
//       })
//     }
//     else if(operation === 'History') {
//       this.setState({
//         display: '',
//         result: ''
//       })
//     }
//     else {
//       const display = this.state.display + operation
//       let result = this.state.result
//       try {
//         let fixedOperation = display.split('×').join('*')
//         fixedOperation = fixedOperation.split('÷').join('/')
//         fixedOperation = fixedOperation.split(',').join('.')

//         result = new String(eval(fixedOperation)).toString()

//       }catch(e) {}
//       this.setState({
//         display,
//         result
//       })
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <Display state={this.state} />
//         <Buttons operation={this.handleOperation} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     backgroundColor: colors['grey-darker'],
//   },
// });

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Calculator">
    <Stack.Screen name="Calculator" component={CalculatorScreen} />
    </Stack.Navigator>
    </NavigationContainer>
   
    );

 
  
}




