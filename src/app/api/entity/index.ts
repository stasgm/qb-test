import shortid from 'shortid';
import { IEntity } from '../../model';
import { entityList } from './mockData';

import config from '../../../../configs/config.json';

const baseURL = `${config.server.http.host}:${config.server.http.port}`;

const fetchData = (): Promise<IEntity[]> => {
  return Promise.resolve(entityList).then(el => {
    return el.map(i => {
      i.id = shortid.generate();
      return i;
    });
  });
};

const fetchDataAsync = (): Promise<IEntity[]> => {
  const ermodelsURL = `${baseURL}${config.server.paths.er}`;

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
  fetchData,
  fetchDataAsync
};
