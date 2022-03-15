import { getServer } from './index';

const server = getServer();

export const fetchPropertiesResult = async () => {
  const res = await server.get('/api/properties');

  return res;
};
