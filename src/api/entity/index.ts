import { IEntity } from '../../model';
import { entityList } from './mockData';

const fetchMembers = (): Promise<IEntity[]> => {
  return Promise.resolve(entityList);
};

export const entityAPI = {
  fetchMembers,
};
