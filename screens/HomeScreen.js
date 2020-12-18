import React, { useContext, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { CardContext } from '../contexts/CardContext'
import avatar from '../assets/avatar/avatar.png'
import CardNavigator from '../navigators/CardNavigator'
import HeaderComponent from '../components/Header.js'
import {layoutStyles} from '../styles/Layout'



export default function HomeScreen(props) {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const { user, token } = useContext(AuthContext)
    const { cards, getCards } = useContext(CardContext)

    useEffect(() => {
        getCards(token)
    }, [])

    return (
        
        <View style={layoutStyles.container, {flex:1, marginTop:20}}>
        <HeaderComponent/>
        
            <Text> Benvenuto </Text>
            <Image style={{ height: 50, width: 50, borderRadius: 20 }}
                source={require('../assets/avatar/avatar.png')} />
            <Text>{user.name}</Text>
            <Text>{date}</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Carte')}>

                <ActivityIndicator />
                <Text >Carte : {cards.length}</Text>
            </TouchableOpacity>

            <Text>Trasferimento : 293</Text>
            </View>

        
        


    )

}