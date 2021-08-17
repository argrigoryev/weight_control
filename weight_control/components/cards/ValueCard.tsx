import React  from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import OutlineBox from '../OutlineBox';
import { commerceColor } from '../../constants/Colors';

type props = {
    title: string;
    value: string;
};

export default function ValueCard({ title, value }: props) {
    return (
        <Card>
            <Text style={styles.text} >{title}</Text>
            <OutlineBox text={value} color={commerceColor} style={styles.box} />
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: '500'
    },
    box: {
        width: '40%',
        marginTop: 15
    }
});
