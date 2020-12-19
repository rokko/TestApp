import React, { createContext, useState } from 'react'

export const CardContext = createContext()
export default function CardProvider({ children }) {

    const [cards, setCards] = useState([])



    function getCards(token) {

        //Facciamo richiesta al Server per ottenere le carte
        fetch(('https://tree-rn-server.herokuapp.com/get-cards'), {
            method: 'GET',
            headers: { 'Authorization': token }
        })
            .then(response => response.json())
            .then(dati => setCards(dati.payload.cards))
            .catch(e => console.log(e))
    }
    return (
        //Rendiamo disponibili a tutto il programma le constanti
        <CardContext.Provider value={{ cards, getCards, setCards }}>
            { children}
        </CardContext.Provider>
    )





}


