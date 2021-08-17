import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

type props = {
    title: string;
    value: number;
    updateValue(value: number): void;
    min: number;
    max: number;
};

export default function SliderCard({ title, updateValue, value: defaultValue, min, max }: props) {
    const [value, setValue] = useState(defaultValue);

    function onValueChange(value: number) {
        setValue(value);
        updateValue(value);
    }

    return (
        <Card>
            <Text style={styles.text} >{title} ({value})</Text>
            <MultiSlider
                onValuesChange={(values: number[]) => onValueChange(values[values.length - 1])}
                min={min}
                max={max}
                step={1}
                values={[value]}
                markerStyle={{ width: 20, height: 20 }}
                pressedMarkerStyle={{ width: 25, height: 25 }}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: '500'
    }
});
