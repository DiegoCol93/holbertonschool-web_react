// Returns an immutable object
import { fromJS } from 'immutable';

const getImmutableObject = function (object) {
  return fromJS(object);
}

export default getImmutableObject;
