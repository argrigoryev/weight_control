import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type props = {
    text: string;
    color: string;
    style?: ViewStyle;
};

export default function OutlineBox({ text, color, style }: props) {
    return (
        <View style={[styles.box, { borderColor: color }, (style ?? [])]} >
            <Text style={[styles.text, { color }]} >{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 80,
        borderRadius: 10,
        borderWidth: 1
    },
    text: {
        fontSize: 15
    }
});
