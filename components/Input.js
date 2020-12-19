import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../config/colors'

const Input = forwardRef(({
  containerStyle,
  labelStyle,
  inputStyle,
  isPassword,
  label = 'Placeholder',
  onTextChange = () => { },
  ...props
}, ref) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)

  const animation = useRef(new Animated.Value(0)).current


  useEffect(() => {
    let toValue = 0
    if (focused) {
      toValue = 1
    }
    if (!focused && !!text) {
      toValue = 2
    }
    Animated.timing(animation, {

      toValue: toValue,
      duration: 300,
      useNativeDriver: false

    }).start()
  }, [focused, text])


  useEffect(() => {
    onTextChange(text)
  }, [text])

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View


        pointerEvents='none'

        style={[
          styles.labelContainer,
          {
            zIndex: 1,
            transform: [{
              translateY: animation.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [0, -30, -30]
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
              inputRange: [0, 1, 2],
              outputRange: [colors.grayLight, colors.silver, colors.yellow]
            })
          }
        ]}
      >
        <TextInput
          style={[
            styles.input,

            inputStyle
          ]}
          value={text}
          onChangeText={value => setText(value)}

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


      <Animated.View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: colors.yellow,
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


