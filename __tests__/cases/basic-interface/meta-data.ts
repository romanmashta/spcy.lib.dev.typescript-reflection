import { Module } from '../../../src/meta-data';

export const meta: Module = {
  members: {
    Person: {
      properties: {
        firstName: 'string',
        lastName: 'string',
        age: 'number',
        isActive: 'boolean'
      }
    }
  }
};
