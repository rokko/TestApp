import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../components/Button'
import HeaderComponent from '../components/Header'
import minecraft from '../assets/games/minecraft.png'

export default function CartaScreen(props) {
    console.log(props)
    let card = props.route.params.otherParam.carta
    let imgSource = props.route.params.otherParam.img


    return (
        <>
       
        <View>
            <Text>{card.name}</Text>
            <Text>{card.id}</Text>
            <Text> {card.created_at}</Text>
            <Text>{card.description}</Text>
            <Image style={{ height: 200, width: 200, borderRadius: 10 }}
                source={imgSource} />
            <Button onPress={() => {
                props.navigation.navigate('Trasferisci', {
                    id: card.id,
                    otherParam:card,
                })
            }}>Trasferisci la carta</Button>

        </View>
        </>
    )

}