import React, { useContext } from 'react'
import { Text, ScrollView } from 'react-native'
import { CardContext } from '../contexts/CardContext'
import CardComponent from '../components/CardComponent'
export default function CarteScreen(props) {

    const { cards } = useContext(CardContext)
    console.log(cards)

    const goCard = (carta)=>{
        console.log(carta)
        props.navigation.navigate('Carta', {
            id : carta.id,
            otherParam : carta,
        })
    } 
    return (
        <>
            <Text>Le mie carte</Text>
            <ScrollView>
            {cards.map((carte, index) => {
                return <CardComponent carte={carte} key={index} goCard={goCard}></CardComponent>
            })}
            </ScrollView>

        </>

    )
}