import { action, extendObservable } from 'mobx';

const Boiler = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {};
    const decorators = {};
    extendObservable(this, props, decorators);
  };
};

export default Boiler;