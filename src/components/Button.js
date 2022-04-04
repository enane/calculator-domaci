import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors';

class Button extends Component {

  handleOperation = () => {
    this.props.operation(this.props.char)
  }

  componentDidMount = () => {
    //console.log(this.props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 15,
    borderColor: colors['black']
  },
  text: {
    color: colors.black,
    fontSize: 28
  }
})

export default Button;