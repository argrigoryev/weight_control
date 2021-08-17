import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import * as React from 'react';
import { Text, useThemeColor } from './Themed';

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    commerce = 'commerce',
    destructive = 'destructive',
    tertiary = 'tertiary'
}

type props = TouchableOpacityProps & {
    text: string,
    type: ButtonType,
    style?: ViewStyle
};

export function Button({ style, text, type, ...otherProps }: props) {
    function getBackgroundColor() {
        let backgroundColor = useThemeColor('primaryButton');
        if (type == 'secondary') {
            backgroundColor = useThemeColor('secondaryButton');
        } else if (type == 'commerce') {
            backgroundColor = useThemeColor('commerceButton');
        } else if (type == 'destructive') {
            backgroundColor = useThemeColor('destructiveButton');
        } else if (type == 'tertiary') {
            backgroundColor = useThemeColor('background');
        }
        return backgroundColor;
    }

    function getTextColor() {
        let textColor = useThemeColor('primaryButtonText');
        if (type == 'secondary') {
            textColor = useThemeColor('secondaryButtonText');
        } else if (type == 'commerce') {
            textColor = useThemeColor('commerceButtonText');
        } else if (type == 'destructive') {
            textColor = useThemeColor('destructiveButtonText');
        } else if (type == 'tertiary') {
            textColor = useThemeColor('tint');
        }
        return textColor;
    }

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: getBackgroundColor() }, style]}
            {...otherProps} activeOpacity={0.6}
        >
            <Text style={[styles.text, { color: getTextColor() }]} >{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '95%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        fontWeight: '500'
    }
});
