import { createServer, Factory, Model, RestSerializer } from 'miragejs';

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
          return '123';
        },
        state() {
          return '123';
        },
        type(i) {
          const typeIndex = Math.floor(i % 4);

          return TYPES[typeIndex];
        },
        price() {
          return '123';
        },
      }),
    },
    seeds(server) {
      server.createList('property', 10);
    },
    routes() {
      this.get('/api/properties', (schema) => {
        return schema.properties.all();
      });
    },
  });
}
