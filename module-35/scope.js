const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;
    // console.log(result);
    // console.log(favNum);
    if (result > 9) {
        // var mood = 'happy';
        // mood = 'cranky';
        // const mood = 'happy';
        let mood = 'happy';
        mood = 'cranky';
        console.log(mood);
    }
    // console.log(mood);
    return result;

}
const sum = add(11, 35);
// console.log(favNum);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);