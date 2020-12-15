import React, { createContext, useContext, useCallback, useState, useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'
import AuthContext from './AuthContext'

export const CardContext = createContext()

export default function CardProvider({ children }) {

    const [cards, setCards] = useState([])



    function getCards(token) {

        useEffect(() => {fetch(('https://tree-rn-server.herokuapp.com/get-cards'), {
            method: 'GET',
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(dati => {
               
                setCards(dati.payload.cards)

            }) }, [])

    }


    return (
        <CardContext.Provider value={{ cards, getCards }}>
            { children}
        </CardContext.Provider>
    )





}


