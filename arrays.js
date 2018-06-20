var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
function addElementToBeginningOfArray(chocolateBars, name){
  morechocolateBars = [`${name}`,...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
  chocolateBars.unshift(`${name}`);
}
function addElementToEndOfArray(chocolateBars, name){
  morechocolateBars = [...chocolateBars, '${name}'];
}
function destructivelyAddElementToEndOfArray(chocolateBars, name){
  chocolateBars.push(`${name}`);
}
function accessElementInArray(chocolateBars, Index) {
  console.log(chocolateBars[`${Index}`]);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(1);
}
function RemoveElementFromBeginningOfArray(chocolateBars) {
  lesschocolateBars = chocolateBars.slice(1);
}
