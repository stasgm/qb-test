import shortid from 'shortid';
import { IEntity } from '../../model';
import { entityList } from './mockData';

const baseURL = 'http://gs.selfip.biz:47004';

const fetchMembers = (): Promise<IEntity[]> => {
  return Promise.resolve(entityList).then(el => {
    return el.map(i => {
      i.id = shortid.generate();
      return i;
    });
  });
};

const fetchMembersAsync = (): Promise<IEntity[]> => {
  const ermodelsURL = `${baseURL}/er`;

  return fetch(ermodelsURL)
    .then(response => response.json())
    .then(mapToEntities);
};

const mapToEntities = (entities: { entities: IEntity[] }): IEntity[] => {
  return entities.entities.map(mapToEntity);
};

const mapToEntity = (entity: IEntity): IEntity => {
  entity.id = shortid.generate();
  return entity;
};

export const entityAPI = {
  fetchMembers,
  fetchMembersAsync
};
