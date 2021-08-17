import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export function useThemeColor(colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
  const theme = useColorScheme();
  return Colors[theme][colorName];
}

export function Text({ style, ...otherProps }: DefaultText['props']) {
  const color = useThemeColor('text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View({ style, ...otherProps }: DefaultView['props']) {
  const backgroundColor = useThemeColor('background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
