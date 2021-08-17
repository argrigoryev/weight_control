import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Card } from '../themed/Card';
import { Text } from '../themed/Themed';

type props = {
    imageSource: ImageSourcePropType;
    title: string;
    text: string
};

export default function ImagedTitledTexCard({ imageSource, title, text }: props) {
    return (
        <Card style={styles.card} >
            <Image
                source={imageSource}
                style={styles.image}
            />
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.text} >{text}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 20,
        paddingTop: 0,
        paddingHorizontal: 0
    },
    image: {
        height: 125,
        width: '100%',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        marginHorizontal: 20,
        marginTop: 15,
        textAlign: 'center'
    },
    text: {
        fontSize: 15,
        marginTop: 15,
        marginHorizontal: 20
    }
});
