import React, { useContext } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { CardContext } from '../contexts/CardContext'
import CardComponent from '../components/CardComponent'
import AsyncStorage from '@react-native-community/async-storage'
import {layoutStyles} from '../styles/Layout'


export default function CarteScreen(props) {

      
  
    const { cards } = useContext(CardContext)
   

    const goCard = (carta, img)=>{
       
        props.navigation.navigate('Carta', {
            id : carta.id,
            otherParam : {carta, img},
        })
    } 
    return (
        <View style={layoutStyles.sfondo}>
            <Text style={[layoutStyles.titleStile, {fontSize:20}]}>Le mie carte</Text>
            <ScrollView style={layoutStyles.contenuto}>
            {cards.map((carte, index) => {
                return <CardComponent carte={carte} key={index} goCard={goCard}></CardComponent>
            })}
            </ScrollView>
            </View>

        

    )
}