function school(arr){
    const classes = new Map();

    for(let chars of arr){
        let [group, name, points] = chars.split(' | ');

        points = Number(points);

        if(!classes.has(group)){
            classes.set(group, new Map());
        }

        const students = classes.get(group);

        if(students.has(name)){
            students.set(name, students.get(name) + points);
        }else{
            students.set(name, points);
        }
    }

    for(let [group, students] of classes){
        console.log(group);

        for(let [name, points] of students){
            console.log(`---${name}: ${points} `);
        }
    }
}

school([
    '10A | Kosio | 50',
    '10B | Ivan | 30',
    '10A | Maria | 40',
    '10A | Kosio | 20',
    '10B | Petar | 60'
]);