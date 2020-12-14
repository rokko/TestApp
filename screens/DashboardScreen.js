import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'
import { rootNavigation } from '../Utility/navigation'
import { AuthContext } from '../contexts/AuthContext'


export default function DashboardScreen(props) {
    const onLogin = () => {
        props.navigation.navigate('Login')
    }
   

    return (
        <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between' }]}>
            <View>
                <Spacer size={10} />
                <Title label="Grazie " centerText />
                <Text>Benvenuti nella nostra app. Prima di continuare controlla la tua mail e verifica l'indirizzo cliccando sul link che ti abbiamo inviato</Text>
            </View>

            <View>
                <Button onPress={onLogin}>Login</Button>
                <Spacer size={20} />
            </View>
           
        </View>
    )
}
