import React  from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../themed/Themed';
import { Card } from '../themed/Card';
import OutlineBox from '../OutlineBox';
import { commerceColor } from '../../constants/Colors';
import { Button, ButtonType } from '../themed/Button';
import { Strings } from '../../localization/Strings';

type props = {
    title: string;
    value: string;
    onMoreButtonClick: () => void;
};

export default function ValueMoreCard({ title, value, onMoreButtonClick }: props) {
    return (
        <Card>
            <Text style={styles.text} >{title}</Text>
            <View style={styles.infoRow} >
                <OutlineBox
                    text={value}
                    color={commerceColor}
                    style={styles.valueBox}
                />
                <Button
                    text={Strings.get('more_details_button')}
                    type={ButtonType.primary}
                    style={styles.actionButton}
                    onPress={onMoreButtonClick}
                />
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center'
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 15
    },
    valueBox: {
        width: '44%',
        marginRight: 15
    },
    actionButton: {
        width: '44%'
    }
});
