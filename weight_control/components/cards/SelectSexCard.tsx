import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import RadioForm from '../themed/RadioForm';
import { Strings } from '../../localization/Strings';

type props = {
    sex: number;
    updateSex: (sex: number) => void;
};

export default function SelectSexCard({ sex, updateSex }: props) {
    return (
        <Card>
            <Text style={styles.title} >{Strings.get('your_sex_text')}</Text>
            <RadioForm
                radios={[
                    { label: Strings.get('male_text'), value: 0 },
                    { label: Strings.get('female_text'), value: 1 }
                ]}
                item={sex}
                onItemChange={updateSex}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '500'
    },
    select: {
        alignSelf: 'flex-start',
        width: '100%',
        marginTop: 15,
        marginHorizontal: 10
    }
});
