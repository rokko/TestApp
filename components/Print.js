import React from 'react'

const arr = (new Array(5)).fill(null)

const Print = () => {
  return (
    arr.map((value, index) => (
      <View key={index}>
        <Text>{index + 1}</Text>
      </View>
    ))
  )
}

export default Print
