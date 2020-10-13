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

    var monthName = new Array(12);
    monthName[1] = 'Jan';
    monthName[2] = 'Feb';
    monthName[3] = 'March;';
    monthName[4] = 'April';
    monthName[5] = 'May';
    monthName[6] = 'June';
    monthName[7] = 'July';
    monthName[8] = 'Aug';
    monthName[9] = 'Sep';
    monthName[10] = 'Oct';
    monthName[11] = 'Nov';
    monthName[12] = 'Dec';

    let not  = hour >=12 ? 'pm' : 'am';

    let hours = hour >12 ? hour-12 : hour ;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById('not').innerHTML = not;
    document.getElementById("date").innerHTML = date1;
    document.getElementById("month").innerHTML = monthName[month + 1];
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = weekday[day];

    setTimeout(digitalClock , 500);

}

digitalClock();