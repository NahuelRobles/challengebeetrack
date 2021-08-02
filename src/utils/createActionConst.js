/** @format */

export const createActionConst = (name, schema) => {
  const keys = Object.keys(schema);

  if (!keys.length) {
    return {
      REQUEST: `${name}.REQUEST`,
      PROCESS: `${name}.PROCESS`,
      SUCCESS: `${name}.SUCCESS`,
      FAILURE: `${name}.FAILURE`,
    };
  }

  return keys.reduce((actions, key) => {
    actions[key] = createActionConst(`${name}.${key}`, schema[key]);
    return actions;
  }, {});
};
