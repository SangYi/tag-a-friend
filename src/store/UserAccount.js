import { action, /*observable,*/ extendObservable } from 'mobx';

const UserAccount = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {
      user: {},
      loadUser: () => {

      },
      removeUser: () => {

      }
    };
    const decorators = {
      // user: observable,
      loadUser: action,
      removeUser: action,
    };
    extendObservable(this, props, decorators);
  };
};

export default UserAccount;