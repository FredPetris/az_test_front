import { List } from 'immutable';

export default (engine, whitelist = []) => {
  return {
    ...engine,

    load() {
      return engine.load().then(result => {
        whitelist.forEach(key => {
          result[key] = new List(result[key]);
        });
        return result;
      });
    },
  };
};
