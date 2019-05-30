import { insertionSort } from '../src/haiku.js';
import { checkPrefix } from '../src/haiku.js';
test('sort array by string length', () => {
  let suffixArray = [
    "able", "ac", "acity", "age", "aholic", "al", "algia", "an", "ance", "ant", "ar", "ard", "arian", "arium", "ary", "ate", "ation", "ative", "cide", "cracy", "crat", "cule", "cy", "cycle", "dom", "dox",	"ectomy", "ed", "ee", "eer", "emia", "en", "ence", "ency", "ent", "er", "ern", "escence", "ese", "esque", "ess", "est", "etic", "ette", "ful", "fy", "gam", "gamy", "gon", "gonic", "hood", "ial", "ian", "iasis", "iatric", "ible", "ic", "ical", "ile", "ily", "ine", "ing", "ion", "ious", "ish", "ism", "ist", "ite", "itis", "ity", "ive", "ization", "ize", "less", "let", "like", "ling", "loger", "logist",	"log", "ly", "ment", "ness", "oid", "ology", "oma", "onym", "opia", "opsy", "or", "ory", "osis", "ostomy", "otomy", "ous", "path",	"pathy", "phile", "phobia", "phone", "phyte", "plegia", "plegic", "pnea", "scopy", "scope", "scribe", "script", "sect", "ship", "sion", "some", "sophy", "sophic", "th", "tion", "tome", "tomy", "trophy", "tude", "ty", "ular", "uous", "ure", "ward", "ware", "wise", "y"
  ];

  let testArray = insertionSort(suffixArray);
  expect(testArray[0]).toBe('y');
})

test('sort array by string length', () => {
  let prefixArray = [
    "a", "after", "anti", "back", "be", "by", "co", "de", "dis", "down", "en", "em", "ex", "fore", "hind", "mid", "midi", "mini", "mis", "off", "on", "out", "over", "post", "pre", "pro", "re", "self", "step", "twi", "un", "under", "up", "with", "a", "Afro", "ambi", "amphi", "an", "ana", "an", "Anglo", "ante", "anti", "apo", "ap", "arch", "astro", "auto", "bi", "bio", "circum", "cis", "con", "co", "com", "col", "cor", "contra", "contro", "counter", "cryo", "crypto", "de", "demi", "demo", "deuter", "di", "dia", "dis", "di", "dif", "du", "duo", "eco", "electro", "en", "el", "em", "epi", "ep", "Euro", "ex", "extra", "Franco", "geo", "gyro", "hetero", "hemi", "homo", "hydro", "hyper", "hypo", "ideo", "idio", "in", "Indo", "in", "il", "im", "ir", "infra", "inter", "intra", "iso", "macr", "mal", "maxi", "mega", "megalo", "meta", "micro", "mono", "mon", "multi", "mult", "neo", "non", "ob", "omni", "ortho", "paleo", "pan", "para", "ped", "per", "peri", "photo", "pleo", "pod", "poly", "post", "pre", "preter", "pro", "pro", "pros", "proto", "pseudo", "pyro", "quasi", "retro", "semi", "socio", "sub", "sup", "super", "supra", "sur", "syn", "sy" , "syl", "sym", "tele", "trans", "tri", "ultra", "uni", "vice", "gain", "umbe", "y",
  ];
  let testArray = insertionSort(prefixArray);
  expect(testArray[0]).toBe('a');
});

test('remove prefix from each word', () => {
  let testVar = checkPrefix("cryptocurrency");
  expect(testVar).toBe('currency');
})
