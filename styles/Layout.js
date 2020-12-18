import { StyleSheet } from 'react-native'
import sizes from '../config/sizes'
import colors from '../config/colors'

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.containerSpace,

  },
  contenuto: {
    
    flexGrow: 1,
    backgroundColor:colors.whiteInput,
    width: '100%',
    padding: 20,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  profile :{
    justifyContent: 'center',
    alignItems: 'center',
  },

  sfondo: {

    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',

  },

  testoNome :{
    fontSize: 25,
    fontWeight: 'bold'

  },

  data :{
    fontStyle: 'italic',
    fontSize : 15,
  },



  headerStile: {
    flexDirection: 'row',
    height : 70,    
    paddingTop: sizes.statusBarHeight,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  titleStile: {
    fontWeight: 'bold',
    color: colors.yellow,

  },
  imageHeader: {
    width: 50,
    height: 50,
  }
}
)
