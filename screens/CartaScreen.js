import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Button from '../components/Button'
import { layoutStyles } from '../styles/Layout'
import Spacer from '../components/Spacer'

export default function CartaScreen(props) {

    let card = props.route.params.otherParam.carta
    let imgSource = props.route.params.otherParam.img


    return (
        <View style={layoutStyles.sfondo}>
            <ScrollView style={[layoutStyles.contenuto,{marginBottom:8}]}>

                <Text style={layoutStyles.testoNome}>{card.name}</Text>
                <Text style={layoutStyles.testoNome}>{card.id}</Text>
                <Text>{card.description}</Text>
                <Image style={{ height: 200, width: 200, borderRadius: 10 }}
                    source={imgSource} />
                <Spacer size={6} />
                <Button onPress={() => {
                    props.navigation.navigate('Trasferisci', {
                        id: card.id,
                        otherParam: card,
                    })
                }}>Trasferisci la carta</Button>


            </ScrollView>

        </View>

    )

}