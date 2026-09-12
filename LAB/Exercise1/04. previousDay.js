function previousDay(year, mounth, day){
    let date = new Date(year, mounth - 1, day);

    date.setDate(date.getDate() - 1);

    let previousYear = date.getFullYear();

    let previousMounth = date.getMonth() + 1;

    let previousDay = date.getDate();

    console.log(`${previousYear}-${previousMounth}-${previousDay}`);

}

previousDay(2015, 5, 10);