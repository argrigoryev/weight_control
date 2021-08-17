import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import BannerAd from '../advert/BannerAd';
import ValueCard from '../components/cards/ValueCard';
import { Strings } from '../localization/Strings';
import TitledTexCard from '../components/cards/TitledTexCard';
import { CalculationModel } from '../models/CalculationModel';

export default function IndexScreen() {
    function getIndex() {
        return CalculationModel.instance().getIndex().toFixed(1);
    }

    function getIndexRange() {
        const min = CalculationModel.instance().getMinIndex();
        const max = CalculationModel.instance().getMaxIndex();
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
                    <ValueCard title={Strings.get('quetelet_index_text')} value={getIndex()} />
                    <ValueCard title={Strings.get('recommended_range_text')} value={getIndexRange()} />
                    <TitledTexCard title={Strings.get('quetelet_index_query')} text={Strings.get('index_text_1')} />
                    <TitledTexCard title={Strings.get('need_index_query')} text={Strings.get('index_text_2')} />
                    <TitledTexCard title={Strings.get('additional_information_text')} text={Strings.get('index_text_3')} />
                </View>
            </ScrollView>
            <BannerAd screen='IndexScreen' />
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
