import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardComponent(props) {



    return (

        <Card >      
            <Card.Content>
                <Title>{props.carte.name}</Title>
                <Paragraph>{props.carte.game}</Paragraph>
            </Card.Content>            
            <Card.Actions>       
                 
            <Button onPress={()=> props.goCard(props.carte)}>Dettagli Carta</Button> 

            </Card.Actions>
        </Card>
    )

}