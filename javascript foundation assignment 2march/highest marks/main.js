let marks = [23, 35, 68, 47, 62];

let highestMark = 0;

for(let i = 0; i < marks.length; i++){
    highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

console.log(`highest marks: ${highestMark}`);