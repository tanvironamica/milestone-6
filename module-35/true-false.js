/* 
Falsy:
false
0
empty string
undefined
null
NaN
----------------------

Truthy:
true
any number (positive or negative truthy)
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/
const x = false;
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
}