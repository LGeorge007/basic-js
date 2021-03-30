const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
     //Проверка на undefined
    if (message === undefined || key === undefined) {
      throw new Error();
    };
    //Словарь
    let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    //Numerical Массив от message
    let encryptedArrayFromMessage = [];

    message.toUpperCase().split("").forEach(e => {
      let val = dictionary.indexOf(e);
      encryptedArrayFromMessage.push((val === -1) ? e : val);
    });
    //Numerical ключ как массив
    let encryptedKey = [];
    key.toUpperCase().split("").forEach(e => {
      let val = dictionary.indexOf(e);
      encryptedKey.push((val === -1) ? e : val);
    });
    let numChipherArrayFromMessage = [];
    //Идем по сообщению
    let j = 0;
    for (let i = 0; i < encryptedArrayFromMessage.length; i++) {
      let letterM = encryptedArrayFromMessage[i];
      if (letterM === " " || letterM === "!" || letterM === "." || letterM === ",") {
        numChipherArrayFromMessage.push(letterM);
        continue;
      };
      let letterK = encryptedKey[j];
      if (j !== encryptedKey.length - 1) {
        j++;
      } else {
        j = 0;
      };
      //добавляем цифру шифра в массив
      numChipherArrayFromMessage.push((letterM + letterK) % 26);
    }
    let letterChipherArrayFromMessage = [];
    numChipherArrayFromMessage.forEach((e) => {
      let val = dictionary[e];
      letterChipherArrayFromMessage.push((val !== undefined) ? val : e);
    });

    if (this.direction) {
      return letterChipherArrayFromMessage.join("");
    } else {
      return letterChipherArrayFromMessage.reverse().join("");
    };

  }

  decrypt(message, key) {

     if (message === undefined || key === undefined) {
        throw new Error();
      };
      //Словарь
      let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      //ключ
      let encryptedKey = [];
      key.toUpperCase().split("").forEach(e => {
        let val = dictionary.indexOf(e);
        encryptedKey.push((val === -1) ? e : val);
      });
      //Numerical Массив от message
      let encryptedArrayFromMessage = [];
      if (this.direction) {
        message.toUpperCase().split("").forEach(e => {
          let val = dictionary.indexOf(e);
          encryptedArrayFromMessage.push((val === -1) ? e : val);
        });
        //console.log("Прямой ", encryptedArrayFromMessage);
      } else {
        message.toUpperCase().split("").reverse().forEach(e => {
          let val = dictionary.indexOf(e);
          encryptedArrayFromMessage.push((val === -1) ? e : val);
        });
        //console.log("НЕПрямой ", encryptedArrayFromMessage);
      };
      //
      let numChipherArrayFromMessage = [];
      //Идем по сообщению
      let j = 0;
      for (let i = 0; i < encryptedArrayFromMessage.length; i++) {
        let letterM = encryptedArrayFromMessage[i];
        if (letterM === " " || letterM === "!" || letterM === "." || letterM === "," || letterM === ":" || letterM === ")" || letterM === "(" || letterM === "/") {
          numChipherArrayFromMessage.push(letterM);
          continue;
        };
        let letterK = encryptedKey[j];
        if (j !== encryptedKey.length - 1) {
          j++;
        } else {
          j = 0;
        };
        //добавляем цифру шифра в массив
        numChipherArrayFromMessage.push((26 - letterK + letterM) % 26);
      }
      let letterChipherArrayFromMessage = [];
      numChipherArrayFromMessage.forEach((e) => {
        let val = dictionary[e];
        letterChipherArrayFromMessage.push((val !== undefined) ? val : e);
      });

      if (this.direction) {
        return letterChipherArrayFromMessage.join("");
      } else {
        return letterChipherArrayFromMessage.reverse().join('');
      };

  }
}

module.exports = VigenereCipheringMachine;
