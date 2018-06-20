var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
function addElementToBeginningOfArray(chocolateBars, name){
  chocolateBars.unshift(`${name}`);
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
  chocolateBars.unshift(`${name}`);
}
function addElementToEndOfArray(chocolateBars, name){
  chocolateBars.push(`${name}`);
}
function destructivelyAddElementToEndOfArray(chocolateBars, name){
  chocolateBars = [...chocolateBars, '${name}'];
}
function accessElementInArray(chocolateBars, Index) {
  console.log(chocolateBars, Index);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
}
function RemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
}