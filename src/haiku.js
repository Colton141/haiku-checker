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

export function checkPrefix(word){
  let lineOne = word.split(' ');
  for (let i = 0; i < lineOne.length; i++){
    let wordChars = lineOne[i].split('');
    for (let j = 0; j < prefixArray.length - 1; j++){
      if (lineOne[i].startsWith(prefixArray[j])){
        word = wordChars.slice(0,(prefixArray[j].length));
        syllables ++;
      }
    }
  }
  return word;
}

export function checkSuffix(){

}

export function checkConsonants(array) {
let consonantArray = ["q", "w", "r", "t", "p", "s", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let specialCase = ["th", "sh", "ph", "ch", "wh"];

  for(let i = 0; i < array.length; i++){
    if(array[i] == array[i-1]) {
      Syllables +=1;
    }
  }

}

export function checkSpecial() {
let vowelArray = ["a", "e", "i", "o", "u", "y"];
}
