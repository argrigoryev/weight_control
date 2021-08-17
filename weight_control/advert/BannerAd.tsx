import React, { useState } from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import { useThemeColor, View } from '../components/themed/Themed';
import { StyleSheet } from 'react-native';
import { TEST_UNIT_ID, UnitIdAdapter } from './UnitIdAdapter';

// FIXME: test unit id
const IS_DEVELOPMENT = true;

type props = {
    screen: string;
};

export default function BannerAd({ screen }: props) {
    const [height, setHeight] = useState<number|string>(75);

    function onBannerError(error: string) {
        console.log(error);
        setHeight(0);
    }

    return (
        <View style={[styles.advert, { backgroundColor: useThemeColor('background'), height }]} >
            <AdMobBanner
                bannerSize='banner'
                adUnitID={IS_DEVELOPMENT ? TEST_UNIT_ID : UnitIdAdapter.getUnitId(screen)}
                servePersonalizedAds
                onDidFailToReceiveAdWithError={onBannerError} />
        </View>
    );
}

const styles = StyleSheet.create({
    advert: {
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%',
        height: 75
    }
});
