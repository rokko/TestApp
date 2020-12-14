import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../config/colors'

// COMPONENT CODE
/////////////////////////////////////////////////////////////////////

export default function Title (props) {

  const alignStyle = props.centerText ? styles.textCenter : {}

  return (
    <View style={styles.container}>
      <Text style={[styles.text, alignStyle]}>{props.label}</Text>
    </View>
  )
}

// COMPONENT STYLE
/////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase'
  },
  textCenter: {
    textAlign: 'center'
  }
})

// COMPONENT PROPS
/////////////////////////////////////////////////////////////////////

Title.propTypes = {
  label: PropTypes.string.isRequired,
  centerText: PropTypes.bool
}

Title.defaultProps = {
  centerText: false
}