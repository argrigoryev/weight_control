import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import BannerAd from '../advert/BannerAd';
import ImagedTitledTexCard from '../components/cards/ImagedTitledTextCard';
import { Strings } from '../localization/Strings';
import TitledTexCard from '../components/cards/TitledTexCard';

export default function CarbohydratesMoreScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled' // hide keyboard on press
                keyboardDismissMode='on-drag' // hide keyboard on drag
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cards}>
                    <ImagedTitledTexCard
                        imageSource={require('../assets/images/carbohydrates_image.jpg')}
                        title={Strings.get('carbohydrates_title_1')}
                        text={Strings.get('carbohydrates_text_1')}
                    />
                    <TitledTexCard
                        title={Strings.get('carbohydrates_title_2')}
                        text={Strings.get('carbohydrates_text_2')}
                    />
                    <TitledTexCard
                        title={Strings.get('carbohydrates_title_3')}
                        text={Strings.get('carbohydrates_text_3')}
                    />
                    <TitledTexCard
                        title={Strings.get('conclusion_prompt')}
                        text={Strings.get('carbohydrates_text_4')}
                    />
                    <TitledTexCard
                        title={Strings.get('carbohydrates_title_5')}
                        text={Strings.get('carbohydrates_text_5')}
                    />
                    <TitledTexCard
                        title={Strings.get('carbohydrates_title_6')}
                        text={Strings.get('carbohydrates_text_6')}
                    />
                </View>
            </ScrollView>
            <BannerAd screen='CarbohydratesMoreScreen' />
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
