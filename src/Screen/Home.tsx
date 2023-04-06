import React, {useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useGetPhotos} from '../hooks';
import {IPropsCard} from '../components/Card';
import {ErrorTab, GardList, Loader, SearchBar} from '../components';

export const Home = () => {
  const {data, setFilterTitle, isError, isLoading} = useGetPhotos();

  const transformedPhotos: IPropsCard[] = useMemo(() => {
    return data
      ? data.map(item => {
          return {
            id: item.id,
            title: item.title,
            img: item.thumbnailUrl,
          };
        })
      : [];
  }, [data]);

  const onSearch = (value: string) => {
    setFilterTitle(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar onSearch={onSearch} />
        {transformedPhotos && <GardList cards={transformedPhotos} />}
        {isError && <ErrorTab message={'Something went wrong'} />}
        {isLoading && <Loader />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
