import { action, observable, extendObservable } from 'mobx';

const User = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {
      user: {},
    };
    const decorators = {
      user: observable,
    };
    extendObservable(this, props, decorators);
  };
};

export default User;