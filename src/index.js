module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < 2; j++) {
      arr.push(bracketsConfig[i][j]);
    }
  }
  let b = 0;
  let j = 0;
  let i = 0;
  let k = 0;
  str = " " + str;
  str = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (str[1] == arr[i]) {
      if ((i % 2 != 0) && (arr[i - 1] != arr[i])) {
        return false;
      }
    }
  }
  next: while (k != 1) {
    if (str.length == 1) {
      return true;
    }
    b = 0;
    j = 0;
    i++;
    while (b != 1) {
      if ((j % 2 != 0) && (str[i] == arr[j])) {
        if (str[i - 1] == arr[j - 1]) {
          str.splice(i - 1, 2);
          b = 1;
          i = 0;
          continue next;
        } else {
          return false;
        }
      } else if (str[i] == arr[j]) {
        if ((arr[j] == arr[j + 1]) && (str[i]) == str[i + 1]) {
          str.splice(i, 2);
          b = 1;
          i = 0;
          continue next;
        }
        continue next;
      }
      j++;
      if (j == arr.length) {
        return false;
      }
    }
  }
}
