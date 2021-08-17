import { StyleSheet, View as DefaultView } from 'react-native';
import * as React from 'react';
import { useThemeColor } from './Themed';

export function Card({ style, ...otherProps }: DefaultView['props']) {
    const backgroundColor = useThemeColor('background');
    const borderColor = useThemeColor('border');
    return <DefaultView style={[{ backgroundColor, borderColor }, styles.card, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        padding: 20
    }
});
