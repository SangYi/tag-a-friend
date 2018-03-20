import { action, extendObservable } from 'mobx';

const Authentication = (superclass) => class extends superclass {
  constructor(args = {}) {
    super(args);
    
    const props = {
      // isLoggedIn: false,
      isAuthenticated: false,
      // isAuthenticating: false,
      redirectToReferrer: false,
      signin() {
        this.isAuthenticated = true;
      },
      signout() {
        this.isAuthenticated = false;
      }

    };
    const decorators = {
      signin: action,
      signout: action,
    };
    
    extendObservable(this, props, decorators);
  };
}

export default Authentication;