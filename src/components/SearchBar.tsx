import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {FONT_COLOR} from '../constants';

interface IPropsSearchBar {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<IPropsSearchBar> = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search'}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: FONT_COLOR.gray,
  },
});
