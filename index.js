let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let date1 = date.getUTCDate();
    let month = date.getMonth();
    let year = date.getUTCFullYear();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("date").innerHTML = date1;
    document.getElementById("month").innerHTML = month + 1;
    document.getElementById("year").innerHTML = year;

    setTimeout(digitalClock , 500);

}

digitalClock();