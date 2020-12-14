import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../config/colors'
/**
 * ref non può essere passata come prop
 * quindi dobbiamo utilizzare `forwardRef`, che la espone
 * come secondo parametro del nostro componente
 * https://it.reactjs.org/docs/forwarding-refs.html
*/
const Input = forwardRef(({
  containerStyle,
  labelStyle,
  inputStyle,
  isPassword,
  label = 'Placeholder',
  onTextChange = () => { },
  ...props // props native di TextInput
}, ref) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  /**
   * creiamo un Animated.Value con valore iniziale 0 che ci
   * servirà per eseguire l'animazione tramite Animated.timing
   * e per utilizzare il suo valore dentro il transform delle
   * Animated.View che abbiamo integrato
   */
  const animation = useRef(new Animated.Value(0)).current

  // gestione della animazione al cambio focus dell'input
  useEffect(() => {
    let toValue = 0
    if (focused) {
      toValue = 1
    }
    if (!focused && !!text) {
      toValue = 2
    }
    Animated.timing(animation, {
      // toValue: focused ? 1 : 0,
      // toValue: +focused, // stessa cosa che sopra
      toValue: toValue, // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
      duration: 300,
      useNativeDriver: false
      // useNativeDriver: true // mettere `true` solamente se le proprietà che andremo ad animare sono `transform` e `opacity`
    }).start()
  }, [focused, text])

  // invio del contenuto dell'input al cambio di valore di text
  useEffect(() => {
    onTextChange(text)
  }, [text])

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View

        //rende cliccabile l'input anche nel placeholder
        pointerEvents='none'

        style={[
          styles.labelContainer,
          {
            zIndex: 1,
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1, 2], // i valori di Animated.Value, gestiti all'interno di useEffect
                outputRange: [0, -30, -30] // il valore di translate basato sui valori di Animated.Value
              })
            }],
          }
        ]}
      >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.background,
          {
            backgroundColor: animation.interpolate({
              inputRange: [0, 1, 2], // i valori di Animated.Value, gestiti all'interno di useEffect
              outputRange: [colors.grayLight, colors.gray, colors.green] // il valore di translate basato sui valori di Animated.Value
            })
          }
        ]}
      >
        <TextInput
          style={[
            styles.input,
            // possiamo cambiare styles anche in base a delle variabili
            // focused ? styles.inputFocused : undefined,
            // {
            //   borderBottomColor: focused ? '#0f0' : '#000'
            // },
            inputStyle
          ]}
          value={text}
          onChangeText={value => setText(value)}
          // onChangeText={setText} // stessa cosa che la riga sopra
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            if (props.onBlurChange) props.onBlurChange()
          }}
          secureTextEntry={isPassword}
          ref={ref}
          {...props}
        />
      </Animated.View>

      {/* TRANSFORM ORIGIN https://github.com/sueLan/react-native-anchor-point */}
      <Animated.View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: 0,
          transform: [{
            scaleX: animation.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 1],
            })
          }]
        }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  background: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  input: {
    backgroundColor: colors.BackgroundInput,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray,
    paddingHorizontal: 4
  },
  inputFocused: {
    borderBottomColor: colors.grayDark
  },
  labelContainer: {
    position: 'absolute',
    top: 30,
    left: 4
  },
  label: {
    fontSize: 20,
    lineHeight: 20
  }
})

export default Input


/**
 * Esempio base componente definita tramite classi.
 */

// import React, { useRef, useEffect, useState, forwardRef } from 'react'
// import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'

// class Input extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       text: '',
//       focused: false
//     }
//   }

//   getText() {
//     return this.state.text
//   }

//   render() {
//     return (
//       <View style={{ backgroundColor: 'red' }}>
//       <TextInput
//         value={this.state.text}
//         onChangeText={value => this.setState({ text: value })}
//         // onChangeText={setText} // stessa cosa che la riga sopra
//         onFocus={() => this.setState({ focused: true })}
//         onBlur={() => this.setState({ focused: false })}
//         { ...this.props }
//       />
//       </View>
//     )
//   }

// }

// export default Input