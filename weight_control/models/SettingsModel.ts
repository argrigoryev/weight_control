// @ts-ignore
import localStorage from 'react-native-sync-localstorage'

export class SettingsModel {
    private static _instance: SettingsModel | null = null;
    private constructor() {}
    public static instance(): SettingsModel {
        if (!SettingsModel._instance) {
            SettingsModel._instance = new SettingsModel();
        }
        return SettingsModel._instance;
    }

    public getSex(): number {
        // masculine
        const DEFAULT_SEX = 0;
        const sex = localStorage.getItem('sex');
        return sex ? parseInt(sex) : DEFAULT_SEX;
    }

    public setSex(sex: number): void {
        localStorage.setItem('sex', sex);
    }

    public getAge(): number {
        const DEFAULT_AGE = 18;
        const age = localStorage.getItem('age');
        return age ? parseInt(age) : DEFAULT_AGE;
    }

    public setAge(age: number): void {
        localStorage.setItem('age', age);
    }

    public getWeight(): number {
        const DEFAULT_WEIGHT = 55;
        const weight = localStorage.getItem('weight');
        return weight ? parseInt(weight) : DEFAULT_WEIGHT;
    }

    public setWeight(weight: number): void {
        localStorage.setItem('weight', weight);
    }

    public getHeight(): number {
        const DEFAULT_HEIGHT = 170;
        const height = localStorage.getItem('height');
        return height ? parseInt(height) : DEFAULT_HEIGHT;
    }

    public setHeight(height: number): void {
        localStorage.setItem('height', height);
    }

    public getGoal(): number {
        // maintaining weight
        const DEFAULT_GOAL = 0;
        const goal = localStorage.getItem('goal');
        return goal ? parseInt(goal) : DEFAULT_GOAL;
    }

    public setGoal(goal: number) {
        localStorage.setItem('goal', goal);
    }
}
