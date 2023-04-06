import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_COLOR} from '../constants';

interface IPropsTypography {
  mode?: 'common' | 'title' | 'subtitle';
  color?: keyof typeof FONT_COLOR;
  children?: React.ReactNode;
}

export const Typography: React.FC<IPropsTypography> = ({
  children,
  mode = 'common',
  color = 'black',
}) => {
  const modeStyle = modeStyles[mode];

  const selectedColor = FONT_COLOR[color];
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{...modeStyle, color: selectedColor}} children={children} />
    </View>
  );
};

const modeStyles = StyleSheet.create({
  common: {
    fontSize: 18,
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
  },
});
