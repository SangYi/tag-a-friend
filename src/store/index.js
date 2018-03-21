import mix from 'lib/mix.js';
import Authentication from './Authentication';

class Base {};

class Store extends mix(Base).with(
  Authentication
) {};

export default Store;