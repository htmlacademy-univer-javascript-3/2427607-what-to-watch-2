export const middleware1 = (store) => (next) => (action) => {
  return next(action);
};
