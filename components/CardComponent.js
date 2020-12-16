import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native'

export default function CardComponent(props) {



    return (

        <Card >
            <Card.Content>
                <Image style={{ height: 50, width: 50, borderRadius: 10 }}
                    source={require(`../assets/games/${props.carte.game}.png`)} />
            </Card.Content>
            <Card.Content>
                <Title>{props.carte.name}</Title>
                <Paragraph>{props.carte.game}</Paragraph>
            </Card.Content>
            <Card.Actions>

                <Button onPress={() => props.goCard(props.carte)}>Dettagli Carta</Button>

            </Card.Actions>
        </Card>
    )

}