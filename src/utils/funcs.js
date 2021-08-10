export const sorted = (arr, property) => {
  return arr.sort((a, b) => {
    if(a[property] < b[property]) return -1;
    else if(a[property] > b[property]) return 1;
    return 0;
  });
}