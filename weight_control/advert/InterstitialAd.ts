import { AdMobInterstitial } from 'expo-ads-admob';
import { UnitIdAdapter } from './UnitIdAdapter';

// FIXME: test unit id
const IS_DEVELOPMENT = true;

const TEST_ID = 'ca-app-pub-3940256099942544/1033173712';

export class InterstitialAd {
    public static async show() {
        // Display an interstitial ad
        await AdMobInterstitial.setAdUnitID(IS_DEVELOPMENT ? TEST_ID : UnitIdAdapter.getUnitId('InterstitialResult'));
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }
}
