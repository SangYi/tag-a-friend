import mix from 'lib/mix.js';
import Authentication from './Authentication';
import UserAccount from './UserAccount';

class Store extends mix(class {}).with(
  Authentication,
  UserAccount
) {
  constructor() {
    super();
    this.url = 'http://localhost:3005'
  }
};

export default Store;