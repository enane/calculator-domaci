import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-web';
import colors from '../utils/colors';

// const Display = ({ state }) => (
//   <View style={styles.container}>
//     <SafeAreaView style={styles.safe}>
//       <Text
//         style={styles.display}
//         adjustsFontSizeToFit
//         numberOfLines={1}
//       >{state.display}</Text>
//       { state.result !== '' &&
//         <Text
//           style={styles.result}
//           adjustsFontSizeToFit
//           numberOfLines={1}
//         >{state.result}</Text>
//       }
//     </SafeAreaView>
//   </View>
// )


const Display = ({ display, result }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safe}>
      <Text
        style={styles.display}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{display}</Text>
      { result !== '' &&
        <Text
          style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={1}
        >{result}</Text>
      }
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['black'],
    flex: 1.3,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingTop:24
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 45,
  },
  result: {
    textAlign: 'right',
    color: colors.white,
    fontSize: 30,
  },
})

export default Display;