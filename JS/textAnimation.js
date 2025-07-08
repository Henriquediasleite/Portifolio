const words = ["Web", "Freelance"];
  let i = 0;
  let timer;

  function typingEffect() {
    const word = words[i].split("");
    let j = 0;
    const animatedText = document.getElementById("animated-text");
    animatedText.textContent = "";

    function typeChar() {
      if (j < word.length) {
        animatedText.textContent += word[j];
        j++;
        setTimeout(typeChar, 150);
      } else {
        setTimeout(eraseEffect, 2000);
      }
    }

    function eraseEffect() {
      if (j >= 0) {
        animatedText.textContent = word.slice(0, j).join("");
        j--;
        setTimeout(eraseEffect, 100);
      } else {
        i = (i + 1) % words.length;
        typingEffect();
      }
    }

    typeChar();
  }

  typingEffect();