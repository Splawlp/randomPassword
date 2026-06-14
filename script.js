const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordContainer = document.getElementById("passwords-container");
const passwordCountInput = document.getElementById("password-count");
const passwordEnteredLength = document.getElementById("password-length");
const specialCharacters = document.getElementById("special-characters");
const numberInPassword = document.getElementById("numbers");


let passwordLength = 0;
let countOfPasswords = 0;
let char_arr = [];


function createRandomPassword() {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += char_arr[Math.floor(Math.random() * char_arr.length)];
  }

  const wrapper = document.createElement("div");
  wrapper.classList.add("password-place");

  const text = document.createElement("span");
  text.textContent = password;

  const icon = document.createElement("span");
  icon.textContent = "📋";
  icon.classList.add("copy-icon");

  wrapper.addEventListener("click", () => {
    navigator.clipboard.writeText(password);

    icon.textContent = "✔";
    setTimeout(() => icon.textContent = "📋", 1000);
  });

  wrapper.append(text, icon);
  passwordContainer.append(wrapper);
}

function createPasswords() {
  char_arr = []
  char_arr.push(...characters);

  if (numberInPassword.checked) {
    char_arr.push(...numbers);
  }

  if (specialCharacters.checked) {
    char_arr.push(...specialChars);
  }

  countOfPasswords = Number(passwordCountInput.value);
  passwordLength = Number(passwordEnteredLength.value);

  if (passwordLength > 20 || passwordLength < 8) {
    alert("Password length must be between 8 and 20 characters");
    return;
  }

  if (countOfPasswords > 10 || countOfPasswords < 1) {
    alert("Number of passwords must be between 1 and 10");
    return;
  }

  passwordContainer.innerHTML = "";

  for (let i = 0; i < countOfPasswords; i++) {
    createRandomPassword();
  }
}
