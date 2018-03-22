import mix from 'lib/mix.js';
import Authentication from './Authentication';

class Store extends mix(class {}).with(
  Authentication
) {};

export default Store;