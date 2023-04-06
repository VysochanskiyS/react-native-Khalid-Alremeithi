import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {REACT_QUERY} from '../constants';
import {getPhotos} from '../api';

interface IParams {
  filter?: string;
}
export const useGetPhotos = (params?: IParams) => {
  const [filterTitle, setFilterTitle] = useState(params?.filter || '');

  const {data, isError, isLoading} = useQuery({
    queryKey: [REACT_QUERY.PHOTOS],
    queryFn: getPhotos,
    select: response => {
      const filteredData =
        filterTitle.length > 0
          ? response.data.filter(photo =>
              photo.title.toLowerCase().includes(filterTitle.toLowerCase()),
            )
          : response.data;
      return filteredData;
    },
  });
  return {data, isError, isLoading, setFilterTitle};
};
