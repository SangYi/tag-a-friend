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
        fetch('http://localhost:3005/login', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            // username,
            // email,
            usernameOrEmail,
            password,
          })
        })
        .then(response => response.json())
        .then(user => {
          console.log('user', user)
          if(user) {
            this.isAuthenticated = true;
            setTimeout( () => {
            // changeRoute(`${usernameOrEmail}/dash`)
            changeRoute(`/`)
            // this.redirectToReferrer = true
            }, 1000)
          }
          // if (user.id) {
          //   this.props.loadUser(user)
          //   this.props.onRouteChange('home');
          // }
        })
        // this.isAuthenticated = true;
        // setTimeout( () => {
        //   this.redirectToReferrer = true
        // }, 1000)
      },
      register: (inputs) => {
        const {name, username, email, password} = inputs;
        fetch('http://localhost:3005/register', {
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
          if (user) {
            console.log('user', user)
            // this.props.loadUser(user)
            // this.props.onRouteChange('home');
          }
        })
      },
      login: (inputs, changeRoute) => {
        this.authenticate(inputs, changeRoute);
      },
      logout: () => {
        this.isAuthenticated = false;
        // this.redirectToReferrer = false;
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