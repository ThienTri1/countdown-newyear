var year = 2023;
var newYears = '1 Jan ' + String(year);

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600 - days * 24);
    const mins = Math.floor((seconds / 60) - (hours * 60) - (days * 24 * 60));
    const secs = Math.floor(seconds - (mins * 60) - (hours * 3600) - (days * 3600 * 24))

    document.getElementById("days").innerText = String(days)
    document.getElementById("hours").innerText = String(hours)
    document.getElementById("mins").innerText = String(mins)
    document.getElementById("secs").innerText = String(secs)

    if (days<=0) {
        year += 1;
        alert('NewYears')
        newYears = '1 Jan ' + String(year);
    }
    // console.log(String(days) + " " + String(hours) + " " + String(mins) + " " + String(secs));
}

countdown();

console.log(year)

setInterval(countdown, 1000)