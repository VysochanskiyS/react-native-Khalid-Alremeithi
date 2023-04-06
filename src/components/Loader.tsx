import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLOR} from '../constants/COLOR';

export const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={COLOR.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
