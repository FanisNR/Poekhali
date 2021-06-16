/*function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1
}
*/
function toHour(num) {
    return `${num}`.padStart(2, "0")
}


/*
function toMinutes(num) {
    return `${num}`.padEnd(2, "0")
}
*/

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }