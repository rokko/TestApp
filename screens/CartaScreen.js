import React from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'

export default function CartaScreen(props) {
    let card = props.route.params.otherParam


    return (
        <View>
            <Text>{card.name}</Text>
            <Text>{card.id}</Text>
            <Text> {card.created_at}</Text>
            <Text>{card.description}</Text>
            <Button onPress={()=> {}}>Trasferisci la carta</Button>

        </View>
    )

}