import React  from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import OutlineBox from '../OutlineBox';
import { commerceColor } from '../../constants/Colors';

type props = {
    title: string;
    text: string;
};

export default function TitledTexCard({ title, text }: props) {
    return (
        <Card>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.text} >{text}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '500'
    },
    text: {
        fontSize: 15,
        marginTop: 15,
        alignSelf: 'flex-start'
    }
});
