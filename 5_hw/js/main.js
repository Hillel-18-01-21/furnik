let arrLength;
let answerArray = [];

do {
    arrLength = askNumber(`Select the length og the array. (More than "3")`);
} while (arrLength <= 3);

for (let i = 0; i < arrLength; i++) {
    answerArray.push(askNumber(`Enter the number`));
};

answerArray = sortNumbers(answerArray);

showResult(answerArray);

function sortNumbers(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j +1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    return arr;
}

function showResult(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
    }
}

function askNumber(answer) {
    let result;
    do {
        result = +prompt(answer);
    } while (result !== result);
    return result;
}