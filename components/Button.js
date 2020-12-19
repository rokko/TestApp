import React from 'react'
import { Pressable, Platform, Text } from 'react-native'
import colors from '../config/colors'


export default function Button({ children, ...props }) {
  const cleanedProps = Object.assign({}, props, {
    style: [{
      backgroundColor: colors.black,
      borderRadius: 20, 
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      borderStyle: 'solid',
      borderColor: colors.yellow,



    }, props.style]
  })

  return (
    <Pressable
      {...cleanedProps}
    >
      <Text
        style={{
          color: colors.yellow,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >{children}</Text>
    </Pressable>
  )
}