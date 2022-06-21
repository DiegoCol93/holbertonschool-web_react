// Returns an immutable object
import { fromJS } from 'immutable';

export function getImmutableObject(object) {
  return fromJS(object);
}
