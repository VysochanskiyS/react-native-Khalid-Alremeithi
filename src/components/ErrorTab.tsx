import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Typography} from './Typography';
import {COLOR} from '../constants/COLOR';

interface IPropsErrorTab {
  message: string;
}
export const ErrorTab: React.FC<IPropsErrorTab> = ({message}) => {
  return (
    <View style={styles.container}>
      <Typography>{message}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.error,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
