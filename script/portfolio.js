const toggle = document.querySelector('.toggle');
const header = document.querySelector('.header');
const link = document.getElementsByTagName('a');
const mIts = document.querySelectorAll('.mIt');

      mIts.forEach(mIt => {
            mIt.addEventListener('click',()=> {
             header.style.height = '4rem';
             toggle.classList.remove('close')
      } )
  })

toggle.addEventListener('click', ()=> {
    if( header.style.height === '4rem') {
          header.style.height = '100vh'
          toggle.classList.add('close')
    }else {
          header.style.height = '4rem';
          toggle.classList.remove('close')
    }
})

// animated text
const words = document.getElementsByClassName('word');
const wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  const cw = wordArray[currentWord];
  const nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  let content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);