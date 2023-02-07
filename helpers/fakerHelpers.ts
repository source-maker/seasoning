import faker from 'faker';

/**
 * Generate random data based on faker schema
 * @param schema - object
 * @param min - minimum number of items to generate
 * @param max - maximum number of items to generate
 * @returns array of objects
 * @example generateFakerData(clientsSchema, 1, 10)
 * @doc https://fakerjs.dev/api/
 */

// example schema
// const clientsSchema = {
//   id: '{{random.number}}',
//   name: '{{company.companyName}} {{company.companySuffix}}',
//   contact: {
//     address: '{{address.streetAddress}}',
//     phone: '{{phone.phoneNumber}}',
//     email: '{{internet.email}}',
//   },
// };

// // data returned will like this:
// [
//   {
//     id: '92447',
//     name: 'Wintheiser Group Group',
//     contact: {
//       address: '566 Leonardo Loop',
//       phone: '025.415.9443 x5894',
//       email: 'Esta36@gmail.com',
//     },
//   },
//   {
//     id: '42354',
//     name: 'Larson Inc and Sons',
//     contact: {
//       address: '3089 Waelchi Keys',
//       phone: '711.874.8437 x58199',
//       email: 'Lloyd_Shanahan73@hotmail.com}',
//     },
//   },
//   ...
// ];

export const generateFakerData = (schema: object, min = 1, max: number) => {
  max = max || min;
  return Array.from({
    length: faker.datatype.number({
      min,
      max,
    }),
  }).map(() => {
    const innerGen = (anySchema) =>
      Object.keys(anySchema).reduce((entity, key) => {
        if (
          Object.prototype.toString.call(anySchema[key]) === '[object Object]'
        ) {
          entity[key] = innerGen(anySchema[key]);
          return entity;
        }
        entity[key] = faker.fake(anySchema[key]);
        return entity;
      }, {});

    return innerGen(schema);
  });
};
