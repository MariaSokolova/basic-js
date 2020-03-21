class VigenereCipheringMachine {
  constructor(direct) {
    this.reverse = direct === false;
  }

  encrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error('no params');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase();

    let result = '';
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str[i].toUpperCase();
      if (alphabet.includes(ch)) {
        let letterKey = key.charAt(counter % key.length);
        let keyPosition = alphabet.indexOf(letterKey);
        let chPosition = alphabet.indexOf(ch);
        ch = alphabet.charAt((chPosition + keyPosition) % alphabet.length);
        counter++;
      }
      result += ch;
    }

    if (this.reverse) {
      result = result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error('no params');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase();

    let result = '';
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str[i].toUpperCase();
      if (alphabet.includes(ch)) {
        let letterKey = key.charAt(counter % key.length);
        let keyPosition = alphabet.indexOf(letterKey);
        let chPosition = alphabet.indexOf(ch);
        ch = alphabet.charAt((chPosition + alphabet.length - keyPosition) % alphabet.length);
        counter++;
      }
      result += ch;
    }
    if (this.reverse) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
