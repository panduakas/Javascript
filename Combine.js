const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];
let newvar = '';
function arrayJoin(str) {
//  localvar = str.push(second, third);
  for (var index = 0; str.length > index; index++) {
    newvar += str[index] + ' ';
  }
  return newvar;
}

arrayJoin(first.concat(second, third));
// console.log(first);
console.log(newvar);
