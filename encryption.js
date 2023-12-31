console.log(encrypt('hello world', '36479479536'));

console.log(decrypt('kkpsx avaqg', '36479479536'));

function encrypt(message, key) {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

  message  = message.split("");
  key      = key.split("");
  const alphabet = alphabetString.split("");
  
  let k = 0;
  
  for (j = 0; j < message.length; j++) {
    for (i = 0; i < alphabet.length; i++) {
      if (message[j] == alphabet[i]) {
        message[j] = rotAlphabetForward(message[j], key[k]);
        k++;
        break;
      }
    }
  }
  function rotAlphabetForward(char, num) {
    
    let i = 0;
    let j = alphabet.indexOf(char);
    let letter;
    
    while (i <= num) {
        letter = alphabet[j];
        //console.log(letter);
        if (j == alphabet.length-1) {
            j = -1;
        }
        j++;
        i++;
    }
    return letter;
  }
  return message.join('');
}

function decrypt(message, key) {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

  message  = message.split("");
  key      = key.split("");
  const alphabet = alphabetString.split("");
  
  let k = 0;
  
  for (j = 0; j < message.length; j++) {
    for (i = 0; i < alphabet.length; i++) {
      if (message[j] == alphabet[i]) {
        message[j] = rotAlphabetBackward(message[j], key[k]);
        k++;
        break;
      }
    }
  }
  function rotAlphabetBackward(char, num) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let letter;
    let j = alphabet.indexOf(char);
    let i = 0;
    
    while (num >= i) {
        letter = alphabet[j];
        //console.log(letter);
        if (j == 0) {
            j = alphabet.length;
        }
        j--;
        i++;
    }
    return letter;
  }
  return message.join('');
}



