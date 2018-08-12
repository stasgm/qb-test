import shortid from 'shortid';
import { IEntity } from '@src/app/model';
import { entityList } from '@src/app/api/entity/mockData';

import config from '../../../../configs/config.json';

const baseURL = `${config.server.http.host}:${config.server.http.port}`;

const mapToEntities = (entities: IEntity[]): IEntity[] => {
  return entities.map(mapToEntity);
};

const mapToEntity = (entity: IEntity): IEntity => {
  entity.id = shortid.generate();
  return entity;
};

const fetchMockData = (): Promise<IEntity[]> => {
  return Promise.resolve(entityList).then(el => {
    return el.map(i => {
      i.id = shortid.generate();
      return i;
    });
  });
};

const fetchData = async (): Promise<IEntity[]> => {
  const ermodelsURL = `${baseURL}${config.server.paths.er}`;
  const response = await fetch(ermodelsURL);
  if (!response.ok) throw new Error(response.statusText);
  const list: {
    entities: IEntity[];
  } = await response.json();
  return mapToEntities(list.entities);
};

/* const fetchDataAsync = (): Promise<IEntity[]> => {
  const ermodelsURL = `${baseURL}${config.server.paths.er}`;

  return fetch(ermodelsURL)
    .then(response => response.json())
    .then(mapToEntities);
}; */

export const entityAPI = {
  fetchData,
  fetchMockData
};
