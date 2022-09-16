const fibs = (num) => {
  const arr = [0, 1];
  while (arr.slice(-1) < num) {
    const add = Number(arr.slice(-2, -1)) + Number(arr.slice(-1));
    arr.push(add);
  }
  return arr;
}

console.log('fibs:   ', fibs(20));


const fibsRec = (num, arr) => {
  let tempArr = [];
  if (arr === undefined) {
    tempArr = [0, 1];
  } else {
    tempArr = arr;
  }
  if (tempArr.slice(-1) < num) {
    tempArr.push(Number(tempArr.slice(-2, -1)) + Number(tempArr.slice(-1)));
    fibsRec(num, tempArr);
  }
  
  return tempArr;
}

console.log('fibsRec:', fibsRec(20));
