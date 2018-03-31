import { action, extendObservable } from 'mobx';

const Authentication = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    
    const props = {
      isLoggedIn: false,
      isAuthenticated: false,
      // isAuthenticating: false,
      redirectToReferrer: false,
      // Actions
      authenticate: (inputs = {}, changeRoute) => {
        const {usernameOrEmail, password} = inputs;
        fetch(`${this.url}/login`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            usernameOrEmail,
            password,
          })
        })
        .then(response => response.json())
        .then(user => {
          if(user.user_id) {
            this.loadUser(user);
            this.isAuthenticated = true;
          }
        })
      },
      register: (inputs, changeRoute) => {
        const {name, username, email, password} = inputs;
        fetch(`${this.url}/register`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name,
            username,
            email,
            password,
          })
        })
        .then(response => response.json())
        .then(user => {
          this.loadUser(user);
          this.isAuthenticated = true;
        })
      },
      login: (inputs, changeRoute) => {
        this.authenticate(inputs, changeRoute);
      },
      logout: () => {
        this.removeUser();
        this.isAuthenticated = false;
      }
    };
    const decorators = {
      authenticate: action,
      register: action,
      login: action,
      logout: action,
    };
    extendObservable(this, props, decorators);
  };
}

export default Authentication;