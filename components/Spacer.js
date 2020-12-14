import React from 'react'
import { View } from 'react-native'
import sizes from '../config/sizes'

/**
 * Componente utile a creare spaziature
 * senza dovere applicare margini o padding 
 * agli altri componenti
 */
const Spacer = ({
  size = 0, // valore di default
  horizontal,
  ...props // props di View aggiuntive
}) => {
  return (
    <View style={{
      width: horizontal ? size * sizes.unitSize : 0,
      height: horizontal ? 0 : size * sizes.unitSize
    }} { ...props } />
  )
}

/**
 * questo si fa sia con i class components che con i function components,
 * anche se per i function component è decisamente meglio che fare come è stato
 * fatto sopra
 */
// Spacer.defaultProps = {
//   size: 0
// }

export default Spacer
