// // code your solution here

// con

// const record = array.find(({result}) => === 'W');
//     if (win){
//         return element.year
//     }

// function superbowlWin(record) {
//     if (record.result === "W"){
//         return record.year
// }


//function superbowlWin(record) 

superbowlWin = (record) => {
    const result = record.find(element => element.result === "W")
    return result ? (result.year) : undefined
}
//     if (record.result === "W"){
//         return record.year
//     }
// }
