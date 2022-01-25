// -----------------Task1--------------
function arrCopy(arr) {
    let newArr = [];
    for (const key in arr) {
        newArr[key] = arr[key];
    }
    return newArr;
}
const arr1 = arrCopy([1, 2, 3]);
console.log(arr1);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr2);

// -----------------Task2--------------
function arrToString(arr) {
    let newArr = [];
    for (const key in arr) {
        newArr[key] = arr[key] + " ";
    }
    return newArr;
}
const arr1 = arrToString([1, 2, 3]);
console.log(arr1);
const arr2 = arrToString([10, 200, 3333]);
console.log(arr2);

// -----------------Task3--------------
function getLength(arr) {
    let newArr = [];
    for (const key in arr) {
        newArr[key] = arr[key].length;
    }
    return newArr;
}
const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
console.log(arr1);
const arr2 = getLength(['Oleksiy', 'Andriana']);
console.log(arr2);

// -----------------Task4--------------
function removeDuplicates(arr) {
    let newArr = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        newArr.push(i);
    }
    return newArr;
}
const arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
console.log(arr1);
const arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);
console.log(arr2);