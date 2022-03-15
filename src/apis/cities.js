import { getServer } from './index';

const server = getServer();

export const fetchCitiesResult = async () => {
  const res = await server.get('/api/properties');

  return res;
};
