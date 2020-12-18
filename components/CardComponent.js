import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native'
import {images} from '../config/immagini'

export default function CardComponent(props) {
  
  
  const imgSource = (images[props.carte.game]) ? images[props.carte.game].uri : images.naruto.uri
   //////Grazie a GabyCN per lo switch
   
    


    return (

        <Card >
            <Card.Content>
                <Image style={{ height: 50, width: 50, borderRadius: 10 }}
                    source={imgSource} />
            </Card.Content>
            <Card.Content>
                <Title>{props.carte.name}</Title>
                <Paragraph>{props.carte.game}</Paragraph>
            </Card.Content>
            <Card.Actions>

                <Button onPress={() => props.goCard(props.carte, imgSource)}>Dettagli Carta</Button>

            </Card.Actions>
        </Card>
    )

}