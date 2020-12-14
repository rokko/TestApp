import React from 'react'
import { Pressable, Platform, Text } from 'react-native'
import colors from '../config/colors'

/**
 * Per controllare su che tipo di dispositivo siamo utilizzare `Platform`,
 * che viene importato da react-native
 * Esempi:
 * Platform.OS === 'android'
 * Platform.OS === 'ios'
 */

/**
 * Questo componente non usa `Button`, ma `Pressable` di react-native
 * https://reactnative.dev/docs/pressable
 * Potremmo utilizzare anche altre tipologie di Touchables:
 * https://reactnative.dev/docs/handling-touches
 * Plus: rendere il bottone personalizzabile tramite le props `background` e `color`
 * Impostarle di default rispettivamente a "black" e "white"
 */

export default function Button ({ children, ...props }) {
  const cleanedProps = Object.assign({}, props, {
    style: [{
      backgroundColor: colors.black, // fare in modo che cambi in base alle props
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center'
    }, props.style]
  })

  return (
    <Pressable
      {...cleanedProps}
    >
      <Text
        style={{
          color: colors.white, // fare in modo che cambi in base alle props
          textAlign: 'center'
        }}
      >{children}</Text>
    </Pressable>
  )
}