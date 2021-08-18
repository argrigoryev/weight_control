import * as React from 'react';
import { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import SelectSexCard from '../components/cards/SelectSexCard';
import NumericInputCard from '../components/cards/NumericInputCard';
import { SettingsModel } from '../models/SettingsModel';
import { Strings } from '../localization/Strings';
import BannerAd from '../advert/BannerAd';
import { Button, ButtonType } from '../components/themed/Button';

export default function FormScreen({ navigation }: StackScreenProps<RootStackParamList>) {
    const [paddingBottom, setPaddingBottom] = useState(125);
    const [sex, setSex] = useState(SettingsModel.instance().getSex());
    const [age, setAge] = useState(SettingsModel.instance().getAge());
    const [weight, setWeight] = useState(SettingsModel.instance().getWeight());
    const [height, setHeight] = useState(SettingsModel.instance().getHeight());

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', event => {
            setPaddingBottom(event.endCoordinates.height);
        });
        Keyboard.addListener('keyboardWillHide', () => {
            setPaddingBottom(125);
        });
    }, []);

    useEffect(() => {
        SettingsModel.instance().setSex(sex);
        SettingsModel.instance().setAge(age);
        SettingsModel.instance().setWeight(weight);
        SettingsModel.instance().setHeight(height);
    }, [sex, age, weight, height]);

    function onCalculateButtonClick() {
      navigation.push('ResultScreen');
    }

    return (
      <View style={styles.container}>
        <ScrollView
            keyboardShouldPersistTaps='handled' // hide keyboard on press
            showsVerticalScrollIndicator={false}
        >
          <View style={[styles.cards, { paddingBottom }]}>
            <SelectSexCard
                sex={sex}
                updateSex={setSex}
            />
            <NumericInputCard
                title={Strings.get('your_age_text')}
                value={age}
                updateValue={(age) => setAge(age)}
            />
            <NumericInputCard
                title={Strings.get('your_weight_text')}
                value={weight}
                updateValue={(weight) => setWeight(weight)}
            />
            <NumericInputCard
                title={Strings.get('your_height_text')}
                value={height}
                updateValue={(height) => setHeight(height)}
            />
          </View>
        </ScrollView>
        <View style={styles.calculateButton} >
          <Button
              text={Strings.get('calculate_button')}
              type={ButtonType.primary}
              onPress={onCalculateButtonClick}
          />
        </View>
        <BannerAd screen='FormScreen' />
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
    paddingHorizontal: 15
  },
  calculateButton: {
    position: 'absolute',
    bottom: 85,
    width: '100%'
  }
});
