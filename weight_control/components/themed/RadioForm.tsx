import React from 'react';
import { StyleSheet } from 'react-native';
import DefaultRadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import { useThemeColor, View } from './Themed';

type props = {
    radios: Array<{ label: string, value: number }>;
    item: number;
    onItemChange(item: number): void;
};

export default function RadioForm({ radios, item, onItemChange }: props) {
    function getDynamicStyles() {
        return {
            labelStyle: {
                color: useThemeColor('text')
            }
        }
    }

    return (
        <View style={styles.form} >
            <DefaultRadioForm
                animation={true}
            >
                {
                    radios.map((obj, i) => (
                        <RadioButton key={i} >
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                onPress={onItemChange}
                                isSelected={i == item}
                                buttonInnerColor={useThemeColor('tint')}
                                buttonOuterColor={useThemeColor('tint')}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={onItemChange}
                                labelStyle={[styles.labelStyle, getDynamicStyles().labelStyle]}
                            />
                        </RadioButton>
                    ))
                }
            </DefaultRadioForm>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        alignSelf: 'flex-start',
        marginTop: 15
    },
    labelStyle: {
        marginLeft: 10
    }
});
