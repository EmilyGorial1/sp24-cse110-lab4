
function printEverySec()
{
let d = new Date();

let time= d.toLocaleTimeString();

console.log(time);
}

printEverySec();

setInterval(printEverySec, 1000);
