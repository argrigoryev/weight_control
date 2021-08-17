import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../themed/Themed';
import { Card } from '../themed/Card';
import RadioForm from '../themed/RadioForm';
import { Strings } from '../../localization/Strings';

type props = {
    goal: number;
    updateGoal: (goal: number) => void;
};

export default function SelectGoalCard({ goal, updateGoal }: props) {
    return (
        <Card>
            <Text style={styles.title} >{Strings.get('your_goal_text')}</Text>
            <RadioForm
                radios={[
                    { label: Strings.get('maintaining_weight_text'), value: 0 },
                    { label: Strings.get('slimming_text'), value: 1 },
                    { label: Strings.get('weight_gain_text'), value: 2 }
                ]}
                item={goal}
                onItemChange={updateGoal}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '500'
    },
    select: {
        alignSelf: 'flex-start',
        width: '100%',
        marginTop: 15,
        marginHorizontal: 10
    }
});
