import { action, extendObservable } from 'mobx';

const Authentication = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    
    const props = {
      // isLoggedIn: false,
      isAuthenticated: false,
      // isAuthenticating: false,
      redirectToReferrer: false,
      // Actions
      authenticate: () => {
        this.isAuthenticated = true;
        setTimeout( () => {
          this.redirectToReferrer = true
        }, 1000)
      },
      signin: () => {
        this.authenticate();
        // this.isAuthenticated = true;
        // this.isAuthenticated = !this.isAuthenticated;
      },
      signout: () => {
        this.isAuthenticated = false;
        setTimeout( () => {
          
        }, 500)
      }
    };
    const decorators = {
      authenticate: action,
      signin: action,
      signout: action,
    };
    extendObservable(this, props, decorators);
  };
}

export default Authentication;