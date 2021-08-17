import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import SelectSexCard from '../components/cards/SelectSexCard';
import SliderCard from '../components/cards/SliderCard';
import { SettingsModel } from '../models/SettingsModel';
import { Strings } from '../localization/Strings';
import BannerAd from '../advert/BannerAd';
import { Button, ButtonType } from '../components/themed/Button';

export default function FormScreen({ navigation }: StackScreenProps<RootStackParamList>) {
    const [sex, setSex] = useState(SettingsModel.instance().getSex());
    const [age, setAge] = useState(SettingsModel.instance().getAge());
    const [weight, setWeight] = useState(SettingsModel.instance().getWeight());
    const [height, setHeight] = useState(SettingsModel.instance().getHeight());

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
            keyboardDismissMode='on-drag' // hide keyboard on drag
            showsVerticalScrollIndicator={false}
        >
          <View style={styles.cards}>
            <SelectSexCard
                sex={sex}
                updateSex={setSex}
            />
            <SliderCard
                title={Strings.get('your_age_text')}
                value={age}
                updateValue={(age) => setAge(age)}
                min={4}
                max={100}
            />
            <SliderCard
                title={Strings.get('your_weight_text')}
                value={weight}
                updateValue={(weight) => setWeight(weight)}
                min={30}
                max={200}
            />
            <SliderCard
                title={Strings.get('your_height_text')}
                value={height}
                updateValue={(height) => setHeight(height)}
                min={100}
                max={250}
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
    paddingHorizontal: 15,
    paddingBottom: 125
  },
  calculateButton: {
    position: 'absolute',
    bottom: 85,
    width: '100%'
  }
});
