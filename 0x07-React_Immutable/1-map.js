import { fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object).toMap();
}

// console.log(getImmutableObject(
//   {
//      fear: true,
//      smell: -1033575916.9145899,
//      wall: false,
//      thing: -914767132
//   }
// ));
