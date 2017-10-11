import store from '../store';

const generateActions = actions => {
  const newActions = {};

  Object.keys(actions).forEach(actionKey => {
    newActions[actionKey] = args => dispatch(actions[actionKey](args));
  });

  return newActions;
};

export default generateActions;
