import mix from 'lib/mix.js';
import Authentication from './Authentication';
import UserAccount from './UserAccount';

class Store extends mix(class {}).with(
  Authentication,
  UserAccount
) {};

export default Store;