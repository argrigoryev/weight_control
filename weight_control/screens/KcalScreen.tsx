import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import BannerAd from '../advert/BannerAd';
import { useEffect, useState } from 'react';
import { SettingsModel } from '../models/SettingsModel';
import SelectGoalCard from '../components/cards/SelectGoalCard';
import ValueMoreCard from '../components/cards/ValueMoreCard';
import { Strings } from '../localization/Strings';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { CalculationModel } from '../models/CalculationModel';

export default function KcalScreen({ navigation }: StackScreenProps<RootStackParamList>) {
    const [goal, setGoal] = useState(SettingsModel.instance().getGoal());
    const [kcal, setKcal] = useState(getKcal());
    const [protein, setProtein] = useState(getProtein());
    const [fat, setFat] = useState(getFat());
    const [carbohydrate, setCarbohydrate] = useState(getCarbohydrate());

    useEffect(() => {
        SettingsModel.instance().setGoal(goal);
        setKcal(getKcal());
        setProtein(getProtein());
        setFat(getFat());
        setCarbohydrate(getCarbohydrate());
    }, [goal]);

    function getKcal() {
        return CalculationModel.instance().getKcal() + ' ' + Strings.get('kcal_text');
    }

    function onKcalButtonClick() {
        navigation.navigate('KcalMoreScreen');
    }

    function getProtein() {
        return CalculationModel.instance().getProtein() + ' ' + Strings.get('gram_text');
    }

    function onProteinButtonClick() {
        navigation.navigate('ProteinMoreScreen');
    }

    function getFat() {
        return CalculationModel.instance().getFat() + ' ' + Strings.get('gram_text');
    }

    function onFatButtonClick() {
        navigation.navigate('FatsMoreScreen');
    }

    function getCarbohydrate() {
        return CalculationModel.instance().getCarbohydrate() + ' ' + Strings.get('gram_text');
    }

    function onCarbohydrateButtonClick() {
        navigation.navigate('CarbohydratesMoreScreen');
    }

    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled' // hide keyboard on press
                keyboardDismissMode='on-drag' // hide keyboard on drag
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cards}>
                    <SelectGoalCard goal={goal} updateGoal={setGoal} />
                    <ValueMoreCard
                        title={Strings.get('daily_calorie_intake')}
                        value={kcal}
                        onMoreButtonClick={onKcalButtonClick}
                    />
                    <ValueMoreCard
                        title={Strings.get('daily_protein_intake_text')}
                        value={protein}
                        onMoreButtonClick={onProteinButtonClick}
                    />
                    <ValueMoreCard
                        title={Strings.get('daily_rate_of_fat_text')}
                        value={fat}
                        onMoreButtonClick={onFatButtonClick}
                    />
                    <ValueMoreCard
                        title={Strings.get('daily_intake_of_carbohydrates_text')}
                        value={carbohydrate}
                        onMoreButtonClick={onCarbohydrateButtonClick}
                    />
                </View>
            </ScrollView>
            <BannerAd screen='KcalScreen' />
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
