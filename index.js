let digitalClock = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let date1 = date.getUTCDate();
    let month = date.getMonth();
    let year = date.getUTCFullYear();
    let day = date.getUTCDay();

    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let not  = hour >=12 ? 'pm' : 'am';

    let hours = hour >12 ? hour-12 : hour ;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById('not').innerHTML = not;
    document.getElementById("date").innerHTML = date1;
    document.getElementById("month").innerHTML = month + 1;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = weekday[day];

    setTimeout(digitalClock , 500);

}

digitalClock();