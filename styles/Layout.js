import { StyleSheet } from 'react-native'
import sizes from '../config/sizes'
import colors from '../config/colors'

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.containerSpace,

  },
  contenuto: {
    flexGrow: 1,
    backgroundColor:
      colors.whiteInput,
    width: 320,
    padding: 20,
    borderRadius: 15,
  },

  sfondo: {
    
    flex:1,
    backgroundColor: colors.black,
    alignItems: 'center',    
    color : colors.yellow,
  },
  
  headerStile : {
    
      backgroundColor:colors.black,
  
  },
  titleStile :{
    fontWeight: 'bold',
    color: colors.yellow,

  },
  imageHeader:{
    width:50, 
    height:50,
  }
}
  )
