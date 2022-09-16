const fibs = (num) => {
  const arr = [0,1];
  while(arr.slice(-1) < num) {
    const add = Number(arr.slice(-2, -1)) + Number(arr.slice(-1));
    arr.push(add);
  }
  return arr;
}

console.log(fibs(20));
