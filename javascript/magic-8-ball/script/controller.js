function showAdvice() {
  let randomAdvice;

  do {
    randomAdvice = advice[Math.floor(Math.random() * advice.length)];
  } while (randomAdvice === currentAdvice);

  document.getElementById('result').innerHTML = randomAdvice;
  currentAdvice = randomAdvice;
}
