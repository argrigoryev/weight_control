import unitIds from './unitIds.json';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const TEST_UNIT_ID = unitIds.Test;

export class UnitIdAdapter {
    public static getUnitId(screen: string): string {
        let screenIds;
        switch (screen) {
            case 'FormScreen':
                screenIds = unitIds.FormScreen;
                break;
            case 'ResultScreen':
                screenIds = unitIds.ResultScreen;
                break;
            case 'NormalWeightScreen':
                screenIds = unitIds.NormalWeightScreen;
                break;
            case 'KcalScreen':
                screenIds = unitIds.KcalScreen;
                break;
            case 'IndexScreen':
                screenIds = unitIds.IndexScreen;
                break;
            case 'KcalMoreScreen':
                screenIds = unitIds.KcalMoreScreen;
                break;
            case 'ProteinMoreScreen':
                screenIds = unitIds.ProteinMoreScreen;
                break;
            case 'FatsMoreScreen':
                screenIds = unitIds.FatsMoreScreen;
                break;
            case 'CarbohydratesMoreScreen':
                screenIds = unitIds.CarbohydratesMoreScreen;
                break;
            case 'InterstitialResult':
                screenIds = unitIds.InterstitialResult;
                break;
        }
        let unitId = TEST_UNIT_ID;
        if (screenIds && Constants.isDevice) {
            if (Platform.OS == 'android') {
                unitId = screenIds.android;
            } else if (Platform.OS == 'ios') {
                unitId = screenIds.ios;
            }
        }
        return unitId;
    }
}
