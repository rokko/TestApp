import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../components/Button'

export default function CartaScreen(props) {
    let card = props.route.params.otherParam


    return (
        <View>
            <Text>{card.name}</Text>
            <Text>{card.id}</Text>
            <Text> {card.created_at}</Text>
            <Text>{card.description}</Text>
            <Image style={{ height: 200, width: 200, borderRadius: 10 }}
                source={require(`../assets/games/${card.game}.png`)} />
            <Button onPress={() => {
                props.navigation.navigate('Trasferisci', {
                    id: card.id,
                    otherParam:card,
                })
            }}>Trasferisci la carta</Button>

        </View>
    )

}