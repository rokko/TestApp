import React, { useContext, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { CardContext } from '../contexts/CardContext'
import avatar from '../assets/avatar/avatar.png'
import CardNavigator from '../navigators/CardNavigator'



export default function HomeScreen(props) {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const { user , token } = useContext(AuthContext)
    const {cards} = useContext(CardContext)
    const {getCards} = useContext(CardContext)
    
    getCards(token)

    return (
        <>
        
            <Text> Benvenuto </Text>
            <Image style={{height:50, width:50 , borderRadius:20}}
               source ={require('../assets/avatar/avatar.png')}/>
            <Text>{user.name}</Text>
            <Text>{date}</Text>
            <TouchableOpacity
            onPress={() =>props.navigation.navigate('Carte')}>
                

            <Text >Carte : {cards.length }</Text>
            </TouchableOpacity>

            <Text>Trasferimento : 293</Text>

    </>


    )

}