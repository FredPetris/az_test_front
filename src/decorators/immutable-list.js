import { List } from 'immutable';
import GroceryRecord from '../records/GroceryRecord';

export default (engine, whitelist = []) => {
  return {
    ...engine,

    load() {
      return engine.load().then(result => {
        whitelist.forEach(key => {
          if (result[key]) {
            result[key] = new List(result[key]).map(item => {
              const { name, checked } = item;
              return new GroceryRecord({ name, checked });
            });
          }
        });
        return result;
      });
    },
  };
};
