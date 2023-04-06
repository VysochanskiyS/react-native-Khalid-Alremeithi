import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Typography} from './Typography';
import {COLOR} from '../constants/COLOR';

export interface IPropsCard {
  id: number;
  title: string;
  img: string;
}

export const Card: React.FC<IPropsCard> = ({img, title}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: img}} style={styles.cardImage} />

      <View style={styles.cardDetails}>
        <Typography color={'green'} mode={'common'}>
          {title}
        </Typography>
      </View>

      <View style={styles.cardButtonSection}>
        <TouchableOpacity style={styles.cardButton}>
          <Typography color="white" mode={'common'}>
            join
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.white,
    borderRadius: 33,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    height: 120,
  },
  cardImage: {
    height: '100%',
    width: 150,
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 12,
  },
  cardButtonSection: {
    flexDirection: 'column-reverse',
    flex: 1,
    paddingBottom: 6,
  },
  cardButton: {
    backgroundColor: COLOR.light_green,
    borderRadius: 33,
    alignSelf: 'flex-start',
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
});
