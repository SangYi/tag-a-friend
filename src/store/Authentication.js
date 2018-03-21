import { decorate, action, computed, observable } from "mobx"
// import { action, extendObservable, set } from 'mobx';

const Authentication = (superclass) => class extends superclass {
  isAuthenticated = false;
  redirectToReferrer = false;

  signin = () => {
    console.log('this', this)
    this.isAuthenticated = true;
  }
}
decorate(Authentication, {
  isAuthenticated: observable,
  redirectToReferrer: observable,
  signin: action,
});

export default Authentication;
// const Authentication = (superclass) => class extends superclass {
//   constructor(args = {}) {
//     super(args);
    
//     const props = {
//       // isLoggedIn: false,
//       isAuthenticated: false,
//       // isAuthenticating: false,
//       redirectToReferrer: false,
//       authenticate() {

//       },
//       signin() {
//         // this.isAuthenticated = true;
//         // set({isAuthenticated: true})
//       },
//       signout() {
//         this.isAuthenticated = false;
//       }

//     };
//     const decorators = {
//       signin: action,
//       signout: action,
//     };
//     // console.log('this', this)
//     console.log('set', set)
//     extendObservable(this, props, decorators);
//   };
// }

// export default Authentication;