let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}

digitalClock();