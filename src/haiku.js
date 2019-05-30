export function insertionSort(ToSort)
{
  for (let i = 1; i < ToSort.length; i++) {
    let j = i;
    while(j > 0) {
      if(ToSort[j-1].length > ToSort[j].length) {
          let Temp = ToSort[j-1];
           ToSort[j-1] = ToSort[j];
           ToSort[j] = Temp;
           j--;
      }else{
        break;
      }
    }
  }
  return ToSort;
}

export function checkPrefix(){

}

export function checkSuffix(){

}

export function checkConsonants() {
let consonantArray = ["q", "w", "r", "t", "p", "s", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let specialCase = ["th", "sh", "ph", "ch", "wh"];

}

export function checkSpecial() {
let vowelArray = ["a", "e", "i", "o", "u", "y"];
}
