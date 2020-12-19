import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { CardContext } from '../contexts/CardContext'
import { layoutStyles } from '../styles/Layout'
import colors from '../config/colors'
import { Title } from 'react-native-paper'
import Spacer from '../components/Spacer'



export default function HomeScreen(props) {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const { user, token } = useContext(AuthContext)
    const { cards, getCards } = useContext(CardContext)

    useEffect(() => {
        getCards(token)
    }, [cards, token])

    return (

        <View style={layoutStyles.sfondo}>

            <View style={[layoutStyles.contenuto, layoutStyles.profile]}>

                <Title style={{ color: colors.black, fontSize: 31 }} >Benvenuto</Title>
                <Image style={{ height: 150, width: 150, borderRadius: 20 }}
                    source={require('../assets/avatar/avatar.png')} />
                <Text style={layoutStyles.testoNome}>{user.name}</Text>
                <Text style={layoutStyles.data}>{date}</Text>
                <Spacer size={10} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 250, height: 75 }} >
                    <TouchableOpacity

                        style={{ flexDirection: 'column', justifyContent: 'center', borderRadius: 5, alignItems: 'center', height: 60, width: 90, backgroundColor: colors.black }}
                        onPress={() => props.navigation.navigate('Carte')}>
                        <Text style={{ color: colors.yellow, fontWeight: 'bold' }} >Carte </Text>
                        <Text style={{ color: colors.yellow, fontWeight: 'bold' }}>{cards.length}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', borderRadius: 5, alignItems: 'center', height: 60, width: 90, backgroundColor: colors.black }}>
                        <Text style={{ color: colors.yellow, fontWeight: 'bold' }}>Trasf </Text>
                        <Text style={{ color: colors.yellow, fontWeight: 'bold' }}>20</Text>
                    </View>
                </View>
            </View>
        </View>





    )

}