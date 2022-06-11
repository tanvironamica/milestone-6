function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myObj = { name: 'Tom Chink', age: 11};
function greetMorning(name) {
    console.log('Good afternoon', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);

function handleClick() {
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function() {
    console.log('buttn is clicked');
})