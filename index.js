var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes1 = Object.assign({}, object, { [key]: value });
  return recipes1;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
   return object
}

function deleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, object);
  return recipes2;
}