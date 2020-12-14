/*
import React from 'react';
import Spacer from "./Spacer.js";
import Button from "./Button.js";
import { Text, View } from 'react-native'
export default function Alert(props) {
    let color = "yellow";
    if (props.typology == "danger") {
        color = "red";
    } else if (props.typology == "success") { color = "green" }
    if (status) {
        return <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
            <Text style={{ color: color }}>{props.message}</Text>
            <Button title="X" onPress={props.onClose}/>

        </View>
    } else { return <Spacer syze={20} /> }
}
*/
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, View, Text } from 'react-native'
import Button from './Button'
import Spacer from './Spacer'
import colors from '../config/colors'
import sizes from '../config/sizes'

// COMPONENT CODE
/////////////////////////////////////////////////////////////////////

/**
 * Scrivere le props tramite il destructuring ci permette di impostare
 * dei valori di default e di non dovere scrivere `props.nomeProp`, ma solo `nomeProp`
 * in giro per il componente.
 * https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
export default function Alert({
  open,
  onClose,
  message = null, // questo campo è null di default, a meno che non si passi un altro valore tramite la prop `message`
  typology
}) {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [open])

  let typologyContainerStyle = typology === "danger" ? styles.containerDanger : styles.containerSuccess

  return (
    <Animated.View style={[styles.container, {
      transform: [{
        scale: animation.interpolate({
          inputRange: [0, 1], // i valori di Animated.Value, gestiti all'interno di useEffect
          outputRange: [0, 1] // il valore di scale basato sui valori di Animated.Value
        })
      }],
    }]}>
      <View style={[styles.containerInternal, typologyContainerStyle]}>
        {
          message && <Text style={styles.message}>{message}</Text>
        }

        {onClose && ( // stampo il bottone solo se la componente riceve la props onClose
          <Button style={styles.button} color={colors.black} onPress={onClose}>Close</Button>
        )}
      </View>
    </Animated.View>
  )
}

// COMPONENT STYLE
/////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.containerSpace,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: sizes.containerSpace,
    paddingTop: 10
  },
  containerInternal: {
    backgroundColor: 'red',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    width: '100%'
  },
  containerSuccess: {
    backgroundColor: colors.green
  },
  containerDanger: {
    backgroundColor: colors.red
  },
  message: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 15,
    flexBasis: '70%'
  },
  button: {
    flexBasis: '30%'
  }
})

// COMPONENT PROPS
/////////////////////////////////////////////////////////////////////

// Alert.propTypes = {
//   status: PropTypes.bool.isRequired,
//   message: PropTypes.string.isRequired,
//   typology: PropTypes.oneOf(['success', 'danger']),
//   onClose: PropTypes.func
// }

// Alert.defaultProps = {
//   typology: 'success'
// }
