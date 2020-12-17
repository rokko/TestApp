import React, { useContext } from 'react'
import { Text, ScrollView } from 'react-native'
import { CardContext } from '../contexts/CardContext'
import CardComponent from '../components/CardComponent'
import AsyncStorage from '@react-native-community/async-storage'


export default function CarteScreen(props) {

      
  
    const { cards } = useContext(CardContext)
   

    const goCard = (carta, img)=>{
       
        props.navigation.navigate('Carta', {
            id : carta.id,
            otherParam : {carta, img},
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