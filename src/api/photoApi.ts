import {network} from './axiosCondig';
import {IPhotoRes} from '../type/api/photo';

export const getPhotos = async () => {
  return network<IPhotoRes[]>('photos');
};
