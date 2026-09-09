function daysInMounth(mounth, year){
    let date = new Date(year, mounth, 0);

    let days = date.getDate();

    console.log(days);
}
daysInMounth(2, 2021);