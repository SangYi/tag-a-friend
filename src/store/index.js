import mix from 'lib/mix.js';
import { extendObservable } from 'mobx';
import Authentication from './Authentication';

class Base {
  // constructor() {
  //   // const props = {}
  //   // const decorators = {}
  //   // extendObservable(this, props, decorators);
  // }
};

class Store extends mix(Base).with(
  Authentication
) {
  constructor() {
    super()
    const props = {

    };
    const decorators = {

    };
    extendObservable(this, props, decorators);
  }
};

export default Store;