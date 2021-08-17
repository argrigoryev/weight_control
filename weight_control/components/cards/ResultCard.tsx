import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Card } from '../themed/Card';
import { Text, View } from '../themed/Themed';
import OutlineBox from '../OutlineBox';
import { commerceColor } from '../../constants/Colors';
import { Button, ButtonType } from '../themed/Button';

type props = {
    imageSource: ImageSourcePropType;
    title: string;
    // TODO: show color according to value
    value: string;
    buttonText: string;
    onButtonClick: () => void;
};

export default function ResultCard({ imageSource, title, value, buttonText, onButtonClick }: props) {
    return (
        <Card style={styles.card} >
            <Image
                source={imageSource}
                style={styles.image}
            />
            <Text style={styles.title} >{title}</Text>
            <View style={styles.infoRow} >
                <OutlineBox
                    text={value}
                    color={commerceColor}
                    style={styles.valueBox}
                />
                <Button
                    text={buttonText}
                    type={ButtonType.primary}
                    style={styles.actionButton}
                    onPress={onButtonClick}
                />
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 20,
        paddingTop: 0,
        paddingHorizontal: 0
    },
    image: {
        height: 125,
        width: '100%',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 15
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 15
    },
    valueBox: {
        width: '44%',
        marginRight: 10
    },
    actionButton: {
        width: '44%'
    }
});
