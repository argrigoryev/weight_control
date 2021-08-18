import React  from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputEndEditingEventData } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import { TextInput } from '../themed/TextInput';
import { Toast } from '../Toast';
import { Strings } from '../../localization/Strings';

type props = {
    title: string;
    value: number;
    updateValue(value: number): void;
};

export default function NumericInputCard({ title, updateValue, value }: props) {
    function onEndEditing(e: NativeSyntheticEvent<TextInputEndEditingEventData>) {
        const int = parseInt(e.nativeEvent.text);
        if (int) {
            updateValue(int);
        } else {
            Toast.instance().show(Strings.get('data_processing_error_message'));
        }
    }

    return (
        <Card>
            <Text style={styles.text} >{title}</Text>
            <TextInput
                style={styles.input}
                defaultValue={value.toString()}
                onEndEditing={onEndEditing}
                maxLength={3}
                keyboardType='numeric'
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: '500'
    },
    input: {
        width: '100%',
        marginTop: 15
    }
});
