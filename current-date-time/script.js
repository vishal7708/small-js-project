// // program to display time and date






const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}

const options1 = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

let clocktiming = setInterval(clock, 1000)

function clock() {
    let dates = new Date();

    let finalTime = new Intl.DateTimeFormat('en-US', options1).format(dates);
    let FinalDate = new Intl.DateTimeFormat('en-US', options).format(dates);

    document.querySelector('#time').innerHTML = finalTime;
    document.querySelector('#date').innerHTML = FinalDate;


}
// 

let runTime = setInterval(letTiming, 1000);



function letTiming() {
    let tim = new Date();
    let fTime = tim.toLocaleTimeString();
    document.querySelector('#dom').innerHTML = fTime;
}