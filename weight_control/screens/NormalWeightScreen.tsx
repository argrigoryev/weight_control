import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import BannerAd from '../advert/BannerAd';
import ValueCard from '../components/cards/ValueCard';
import TitledTexCard from '../components/cards/TitledTexCard';
import { Strings } from '../localization/Strings';
import { CalculationModel } from '../models/CalculationModel';

export default function NormalWeightScreen() {
    function getNormalWeightRange() {
        const min = CalculationModel.instance().getMinNormalWeight().toFixed(1);
        const max = CalculationModel.instance().getMaxNormalWeight().toFixed(1);
        return `${min} - ${max}`;
    }

    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled' // hide keyboard on press
                keyboardDismissMode='on-drag' // hide keyboard on drag
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cards}>
                    <ValueCard title={Strings.get('optimal_weight_range_text')} value={getNormalWeightRange()} />
                    <TitledTexCard title={Strings.get('such_range_query')} text={Strings.get('normal_weight_text_1')} />
                </View>
            </ScrollView>
            <BannerAd screen='NormalWeightScreen' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    cards: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 85
    },
});
