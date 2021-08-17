import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/themed/Themed';
import BannerAd from '../advert/BannerAd';
import ImagedTitledTexCard from '../components/cards/ImagedTitledTextCard';
import { Strings } from '../localization/Strings';
import TitledTexCard from '../components/cards/TitledTexCard';

export default function ProteinMoreScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='handled' // hide keyboard on press
                keyboardDismissMode='on-drag' // hide keyboard on drag
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cards}>
                    <ImagedTitledTexCard
                        imageSource={require('../assets/images/protein_image.jpg')}
                        title={Strings.get('protein_title_1')}
                        text={Strings.get('protein_text_1')}
                    />
                    <TitledTexCard
                        title={Strings.get('protein_title_2')}
                        text={Strings.get('protein_text_2')}
                    />
                    <TitledTexCard
                        title={Strings.get('protein_title_3')}
                        text={Strings.get('protein_text_3')}
                    />
                    <TitledTexCard
                        title={Strings.get('conclusion_prompt')}
                        text={Strings.get('protein_text_4')}
                    />
                    <TitledTexCard
                        title={Strings.get('protein_title_5')}
                        text={Strings.get('protein_text_5')}
                    />
                </View>
            </ScrollView>
            <BannerAd screen='ProteinMoreScreen' />
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
