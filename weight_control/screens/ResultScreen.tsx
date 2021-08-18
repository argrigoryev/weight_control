import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import BannerAd from '../advert/BannerAd';
import ResultCard from '../components/cards/ResultCard';
import { Strings } from '../localization/Strings';
import { CalculationModel } from '../models/CalculationModel';
import { useEffect } from 'react';
import { InterstitialAd } from '../advert/InterstitialAd';

export default function ResultScreen({ navigation }: StackScreenProps<RootStackParamList>) {

    useEffect(() => {
        (async function() {
            await InterstitialAd.show();
        })()
    }, []);

    function getNormalWeight() {
        return CalculationModel.instance().getApproximateNormalWeight().toString() + ' ' + Strings.get('kg_text');
    }

    function onNormalWeightButtonClick() {
        navigation.navigate('NormalWeightScreen');
    }

    function getKcal() {
        return CalculationModel.instance().getNormalKcal() + ' ' + Strings.get('kcal_text');
    }

    function onKcalButtonClick() {
        navigation.navigate('KcalScreen');
    }

    function getIndex() {
        return CalculationModel.instance().getIndex().toFixed(0);
    }

    function onIndexButtonClick() {
        navigation.navigate('IndexScreen');
    }

  return (
      <View style={styles.container}>
        <ScrollView
            keyboardShouldPersistTaps='handled' // hide keyboard on press
            keyboardDismissMode='on-drag' // hide keyboard on drag
            showsVerticalScrollIndicator={false}
        >
          <View style={styles.cards}>
            <ResultCard
                imageSource={require('../assets/images/result_image_1.jpg')}
                title={Strings.get('normal_weight_text')}
                value={getNormalWeight()}
                buttonText={Strings.get('more_details_button')}
                onButtonClick={onNormalWeightButtonClick}
            />
            <ResultCard
                imageSource={require('../assets/images/result_image_2.jpg')}
                title={Strings.get('daily_calorie_intake')}
                value={getKcal()}
                buttonText={Strings.get('more_details_button')}
                onButtonClick={onKcalButtonClick}
            />
            <ResultCard
                imageSource={require('../assets/images/result_image_3.jpg')}
                title={Strings.get('quetelet_index_text')}
                value={getIndex()}
                buttonText={Strings.get('more_details_button')}
                onButtonClick={onIndexButtonClick}
            />
          </View>
        </ScrollView>
        <BannerAd screen='ResultScreen' />
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
