let newArray = [];
showAnswer();

function showAnswer() {
    let result = getNumber();
    alert(getOperation(result));
    while(confirm(`Do you want to do any more operations?`)) {
        if(confirm(`With this array?`)) {
            alert(getOperation(result)); 
        }else {
            showAnswer();
        };
    };
}



function getNumber() {
    let answer = prompt(`Enter the numbers separated by commas`);
    return answer.split(`,`);
};

function getOperation(arr) {
    let operationArray = [`sort`, `%3`, `join`, `min`, `max`];
    let answer = prompt(`Choose operation: ${operationArray}`)
    let Operation;

    switch (answer) {
        case operationArray[0] :
            Operation = `[${sortArray(arr)}]`;
        break;

        case operationArray[1] :
            getMultThree(arr);
            Operation = `${newArray}`;
        break;

        case operationArray[2] :
            Operation = `${getJoinString(arr)}`;
        break; 

        case operationArray[3] :
            Operation = `${getMinNumber(arr)}`;
        break;

        case operationArray[4] :
            Operation = `${getMaxNumber(arr)}`;
        break;
    };

    let resultOperation;
    resultOperation = `    Your operation: ${answer}
    Result: ${Operation}`
    return resultOperation;
};

function getJoinString(arr) {
    let result;
    result = prompt(`Select divisor`);
    return arr.join(`${result}`);
};

function getMinNumber(arr) {
    let result;
    result = sortArray(arr);
    return result[0];
};

function getMaxNumber(arr) {
    let result;
    result = sortArray(arr);
    return result[arr.length - 1];
};


function getMultThree(arr) {
    arr.map(e => {
    e = +e;
     if(e % 3 === 0) {
        newArray.push(e);
     }})
};

function sortArray(arr) {
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
};
