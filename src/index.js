const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let res = '';
  for (let i=0; i < expr.length ; i += 10){
    let substring = expr.substring(i, i+10);
    let result = '';
    if (substring === '**********'){
      res += ' ';
    } else {
      for (let j = 0; j < substring.length; j += 2){
        result += (substring.substring(j,j+2) === '10' ? '.' : substring.substring(j,j+2) === '11' ? '-' : '')  
      }
      res += MORSE_TABLE[result];
    }     
  }  
  return(res);
}

module.exports = {
  decode
}


