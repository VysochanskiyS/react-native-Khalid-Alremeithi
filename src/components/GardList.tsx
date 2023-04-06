import React from 'react';
import {Card, IPropsCard} from './Card';
import {FlatList, StyleSheet, View} from 'react-native';

interface IPropsGardList {
  cards: IPropsCard[];
}

export const GardList: React.FC<IPropsGardList> = ({cards}) => {
  return (
    <FlatList
      data={cards}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      renderItem={({item}) => <Card {...item} />}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    paddingRight: 8,
    paddingLeft: 8,
  },
});
