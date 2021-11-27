const decodeButtton = document.querySelector('#decode-btn'),
   phraseInput = document.querySelector('#phrase'),
   resultField = document.querySelector('#result');


decodeButtton.addEventListener('click', () => {
   resultField.innerText = '';
   let str = '';
   let phrase = phraseInput.value.toUpperCase();
   for (let i = 0; i < phrase.length; i++) {
      if (!(phrase[i]).match(/[A-Z]/)) {
         str += phrase[i];
      } else {
         let code = phrase.charCodeAt(i);

         if (code > 64 && code < 78) {
            console.log(code + 'in');
            code += 13;
            console.log(code + 'out');
            str += String.fromCharCode(code);
         } else if (code > 77 && code < 91) {
            console.log(code + 'in');
            code -= 13;
            console.log(code + 'out');
            str += String.fromCharCode(code);
         }
      }
   }
   resultField.innerText = str;
})