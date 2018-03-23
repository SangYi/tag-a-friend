import mix from 'lib/mix.js';
import Authentication from './Authentication';
import User from './User';

class Store extends mix(class {}).with(
  Authentication,
  User
) {};

export default Store;