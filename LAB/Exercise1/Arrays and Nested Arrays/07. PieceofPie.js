function pieceOfPie(arr, startPie, endPie){
    let index1 = arr.indexOf(startPie);
        
    let index2 = arr.indexOf(endPie) + 1;

    let part = arr.slice(index1, index2);

    return part;
}

pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'], 'Key Lime Pie',
'Lemon Meringue Pie');