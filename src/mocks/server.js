import { createServer, Factory, Model } from 'miragejs';
import faker from '@faker-js/faker/locale/en_US';

faker.locale = 'en_US';

const TYPES = [`Apartment`, `Single-family`, `Townhomes`, `Condo`];

export function configureServer() {
  return createServer({
    models: {
      property: Model,
    },
    factories: {
      property: Factory.extend({
        id(i) {
          return i + 1;
        },
        city() {
          return faker.address.cityName();
        },
        state() {
          return faker.address.state();
        },
        type(i) {
          const typeIndex = Math.floor(i % 4);

          return TYPES[typeIndex];
        },
        price() {
          return faker.commerce.price();
        },
      }),
    },
    seeds(server) {
      server.createList('property', 100);
    },
    routes() {
      this.get('/api/properties', (schema) => {
        return schema.properties.all();
      });
    },
  });
}
