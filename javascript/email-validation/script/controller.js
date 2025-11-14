function saveUserInput(userInput) {
  userValue = userInput.value;
  console.log(userValue);
}

function checkEmail() {
  document.getElementById('inputField').value = '';

  if (userValue.includes(' ')) {
    isEmail = false;
    document.getElementById('result').innerHTML = 'This is not an email';
  } else if (userValue.includes('@.')) {
    isEmail = true;
    document.getElementById('result').innerHTML = 'This is an email';
  } else {
    isEmail = false;
    document.getElementById('result').innerHTML = 'This is not an email';
  }
}
