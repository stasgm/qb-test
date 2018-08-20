import { ERModel, deserializeERModel } from 'gdmn-orm';
import { IEntity } from '@src/app/model';
import { entityList } from '@src/app/api/entity/mockData';

import config from '../../../../configs/config.json';

const baseURL = `${config.server.http.host}:${config.server.http.port}`;

const mapToEntities = (entities: IEntity[]): IEntity[] => {
  return entities.map(mapToEntity);
};

const mapToEntity = (entity: IEntity): IEntity => {
  return entity;
};

const fetchMockData = (): Promise<IEntity[]> => {
  return Promise.resolve(entityList).then(el => el);
};

const fetchData = async (): Promise<ERModel> => {
  const ermodelsURL = `${baseURL}${config.server.paths.er}`;
  const response = await fetch(ermodelsURL);
  if (!response.ok) throw new Error(response.statusText);

  return deserializeERModel(JSON.parse(await (response.json())));;
};

export const entityAPI = {
  fetchData,
  fetchMockData
};
