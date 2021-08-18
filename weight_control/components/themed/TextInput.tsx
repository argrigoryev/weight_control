import { StyleSheet, TextInput as DefaultTextInput } from 'react-native';
import * as React from 'react';
import { useThemeColor } from './Themed';

export function TextInput({ style, ...otherProps }: DefaultTextInput['props']) {
    const backgroundColor = useThemeColor('textInputBackground');
    const textColor = useThemeColor('text');
    const borderColor = useThemeColor('border');

    return (<DefaultTextInput
        style={[{ backgroundColor, borderColor, color: textColor }, styles.input, style]}
        {...otherProps}
    />);
}

const styles = StyleSheet.create({
    input: {
        padding: 7,
        borderRadius: 10,
        borderWidth: 0.5
    }
});
