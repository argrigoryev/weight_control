import { SettingsModel } from './SettingsModel';

export class CalculationModel {
    private static _instance: CalculationModel | null = null;
    private constructor() {}
    public static instance(): CalculationModel {
        if (!CalculationModel._instance) {
            CalculationModel._instance = new CalculationModel();
        }
        return CalculationModel._instance;
    }

    private NORMAL_MALE_INDEX = 22;
    private NORMAL_FEMALE_INDEX = 21;

    public SEX = {
      MALE: 0,
      FEMALE: 1
    };

    public GOAL = {
        MAINTAINING: 0,
        SLIMMING: 1,
        WEIGHT_GAIN: 2
    };

    public getApproximateNormalWeight(): number {
        const sex = SettingsModel.instance().getSex();
        const height = SettingsModel.instance().getHeight();
        return Math.round((sex == this.SEX.FEMALE ? this.NORMAL_FEMALE_INDEX : this.NORMAL_MALE_INDEX) *  Math.pow(height/100, 2));
    }

    public getApproximateKcal(): number {
        const sex = SettingsModel.instance().getSex();
        const weight = SettingsModel.instance().getWeight();
        const height = SettingsModel.instance().getHeight();
        const age = SettingsModel.instance().getAge();
        if (sex == this.SEX.FEMALE) {
            return Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age));
        } else {
            return Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age));
        }
    }

    public getIndex(): number {
        const weight = SettingsModel.instance().getWeight();
        const height = SettingsModel.instance().getHeight();
        return weight / (Math.pow(height/100, 2));
    }

    public getMinNormalWeight(): number {
        const sex = SettingsModel.instance().getSex();
        const height = SettingsModel.instance().getHeight();
        return (sex == this.SEX.FEMALE ? 19 : 20) * Math.pow(height/100, 2)
    }

    public getMaxNormalWeight(): number {
        const sex = SettingsModel.instance().getSex();
        const height = SettingsModel.instance().getHeight();
        return (sex == this.SEX.FEMALE ? 24 : 25) * Math.pow(height/100, 2)
    }

    public getMinIndex(): number {
        const sex = SettingsModel.instance().getSex();
        return sex == this.SEX.FEMALE ? 19 : 20;
    }

    public getMaxIndex(): number {
        const sex = SettingsModel.instance().getSex();
        return sex == this.SEX.FEMALE ? 24 : 25;
    }

    public getKcal(): number {
        const goal = SettingsModel.instance().getGoal();
        const approx = this.getApproximateKcal();
        if (goal == this.GOAL.SLIMMING) {
            return Math.round(approx * 0.85);
        } else if (goal == this.GOAL.WEIGHT_GAIN) {
            return Math.round(approx * 1.15);
        } else {
            return approx;
        }
    }

    public getProtein(): number {
        return Math.round((this.getApproximateKcal() * 0.3) / 4);
    }

    public getFat(): number {
        const goal = SettingsModel.instance().getGoal();
        const kcal = this.getApproximateKcal();
        if (goal == this.GOAL.SLIMMING) {
            return Math.round((kcal * 0.3) / 9);
        } else if (goal == this.GOAL.WEIGHT_GAIN) {
            return Math.round((kcal * 0.15) / 9);
        } else {
            return Math.round((kcal * 0.2) / 9);
        }
    }

    public getCarbohydrate(): number {
        const goal = SettingsModel.instance().getGoal();
        const kcal = this.getApproximateKcal();
        if (goal == this.GOAL.SLIMMING) {
            return Math.round((kcal * 0.4) / 9);
        } else if (goal == this.GOAL.WEIGHT_GAIN) {
            return Math.round((kcal * 0.55) / 9);
        } else {
            return Math.round((kcal * 0.5) / 9);
        }
    }
}
